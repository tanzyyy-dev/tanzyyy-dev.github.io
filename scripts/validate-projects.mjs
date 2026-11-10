import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const root = process.cwd();
const base = path.join(root, 'src', 'data', 'projects');
const categories = ['games', 'tools', 'contents'];
const errors = [];
const slugs = new Set();
const fail = message => errors.push(message);
const read = file => fs.readFileSync(file, 'utf8');
const parse = file => ts.createSourceFile(file, read(file), ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
const property = (obj, key) => obj.properties.find(p => ts.isPropertyAssignment(p) && (p.name.text === key));
const value = (obj, key) => property(obj, key)?.initializer;
const asString = node => node && ts.isStringLiteral(node) ? node.text : undefined;
const checkLocalized = (node, label) => {
  if (!node || !ts.isObjectLiteralExpression(node)) { fail(label + ': JA/EN object required'); return; }
  for (const lang of ['ja', 'en']) if (!asString(value(node, lang))?.trim()) fail(label + ': missing ' + lang);
};
const checkDate = (node, label) => {
  if (!node || node.kind === ts.SyntaxKind.NullKeyword) return;
  const raw = asString(node);
  if (!raw || !/^\d{4}-\d{2}-\d{2}$/.test(raw) || Number.isNaN(Date.parse(raw)) || new Date(raw).toISOString().slice(0, 10) !== raw) fail(label + ': invalid YYYY-MM-DD date');
};
const checkUrl = (node, label) => {
  if (!node) return;
  const raw = asString(node);
  try { const url = new URL(raw); if (!['http:', 'https:'].includes(url.protocol)) throw Error(); }
  catch { fail(label + ': invalid http(s) URL'); }
};
const checkFile = (raw, label) => {
  if (raw.startsWith('/')) {
    const publicRoot = path.resolve(root, 'public');
    const resolved = path.resolve(publicRoot, '.' + raw);
    if (resolved === publicRoot || !resolved.startsWith(publicRoot + path.sep) || !fs.existsSync(resolved) || !fs.statSync(resolved).isFile()) fail(label + ': missing/invalid public asset ' + raw);
  } else {
    checkUrl(ts.factory.createStringLiteral(raw), label);
  }
};
for (const category of categories) {
  const dir = path.join(base, category);
  const indexPath = path.join(dir, 'index.ts');
  if (!fs.existsSync(indexPath)) { fail(category + ': missing index.ts'); continue; }
  const indexAst = parse(indexPath);
  const modules = new Set();
  for (const statement of indexAst.statements) {
    if (ts.isImportDeclaration(statement) && ts.isStringLiteral(statement.moduleSpecifier)) {
      const ref = statement.moduleSpecifier.text;
      if (ref.startsWith('./')) modules.add(ref.slice(2));
    }
  }
  const entries = fs.readdirSync(dir).filter(file => file.endsWith('.ts') && file !== 'index.ts');
  for (const name of modules) if (!entries.includes(name + '.ts')) fail(category + ': index imports missing module ' + name);
  for (const name of entries) {
    const basename = name.slice(0, -3);
    const label = category + '/' + name;
    if (!modules.has(basename)) fail(label + ': not imported in index.ts');
    const ast = parse(path.join(dir, name));
    const objects = [];
    const visit = node => {
      if (ts.isVariableDeclaration(node) && node.initializer && ts.isObjectLiteralExpression(node.initializer)) objects.push(node.initializer);
      ts.forEachChild(node, visit);
    };
    visit(ast);
    if (objects.length !== 1) { fail(label + ': expected one work object per file'); continue; }
    const obj = objects[0];
    const slug = asString(value(obj, 'slug'));
    if (!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) fail(label + ': invalid slug');
    if (slug !== basename) fail(label + ': filename must equal slug');
    if (slugs.has(slug)) fail(label + ': duplicate slug ' + slug);
    slugs.add(slug);
    if (asString(value(obj, 'category')) !== category) fail(label + ': category mismatch');
    if (!asString(value(obj, 'title'))?.trim()) fail(label + ': missing title');
    checkLocalized(value(obj, 'summary'), label + '.summary');
    if (category === 'games') checkLocalized(value(obj, 'genre'), label + '.genre');
    checkDate(value(obj, 'releasedAt'), label + '.releasedAt');
    checkDate(value(obj, 'updatedAt'), label + '.updatedAt');
    checkUrl(value(obj, 'repositoryUrl'), label + '.repositoryUrl');
    checkUrl(value(obj, category === 'games' ? 'playUrl' : 'url'), label + '.publicUrl');
    const media = value(obj, 'media');
    if (!media || !ts.isArrayLiteralExpression(media)) fail(label + ': media must be an array');
    else for (const [i, item] of media.elements.entries()) {
      if (!ts.isObjectLiteralExpression(item)) { fail(label + ': invalid media object'); continue; }
      checkLocalized(value(item, 'alt'), label + '.media[' + i + '].alt');
      const src = asString(value(item, 'src'));
      if (!src) fail(label + ': missing media src');
      else checkFile(src, label + '.media[' + i + '].src');
      const poster = asString(value(item, 'poster'));
      if (poster) checkFile(poster, label + '.media[' + i + '].poster');
    }
    const notes = value(obj, 'updateNotes');
    if (!notes || !ts.isArrayLiteralExpression(notes)) fail(label + ': updateNotes must be an array');
    else notes.elements.forEach((item, i) => checkLocalized(item, label + '.updateNotes[' + i + ']'));
  }
}
if (errors.length) {
  console.error('Project validation failed:\n' + errors.map(error => ' - ' + error).join('\n'));
  process.exitCode = 1;
} else {
  console.log('Project validation passed: ' + slugs.size + ' works');
}
