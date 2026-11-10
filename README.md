# tanzyyy-dev project catalog

Astro + TypeScript で制作した、日英対応の作品紹介サイトです。

- 日本語: https://tanzyyy-dev.github.io/
- English: https://tanzyyy-dev.github.io/en/

## ローカル開発

Node.js 22 以上と npm が必要です。

```bash
git clone https://github.com/tanzyyy-dev/tanzyyy-dev.github.io.git
cd tanzyyy-dev.github.io
npm ci
npm run dev
```

開発サーバーの表示する URL（通常は http://localhost:4321/ ）を開きます。

## ビルドとプレビュー

```bash
npm run build
npm run preview
```

静的ファイルは `dist/` に生成されます。GitHub Pages へのデプロイは `main` ブランチへの push 時に `.github/workflows/deploy.yml` で実行されます。

## コンテンツとページ構成

- 作品の説明文・公開URL・リポジトリURL: `src/data/projects/{games,tools,contents}/{slug}.ts`（1作品1ファイル）
- 作品の型定義: `src/data/types.ts`
- カテゴリ別の登録一覧: `src/data/projects/{games,tools,contents}/index.ts`
- 統合した作品一覧・件数・URL: `src/data/projects/index.ts`
- 日英の表示文言: `src/data/content.ts`
- サイト共通レイアウトと SEO メタデータ: `src/layouts/Base.astro`
- 作品の一覧・詳細: `src/components/`
- スタイル: `src/styles/global.css`

`/` と `/en/` が各言語のトップページです。`/projects/` と `/en/projects/` にも作品一覧があります。


## 作品データの追加と検証

作品ごとのファイルを作り、該当カテゴリの `index.ts` に追加してください。ゲーム・ツール・コンテンツは共通一覧・日英の詳細ページ・トップページの件数に反映されます。ゲーム専用の詳しい表示は維持します。

```bash
npm run validate:projects
npm run build
```

`npm run build` は先に作品データを検証します。作品IDの重複、登録漏れ、日英説明文、日付形式、URL形式、ローカル画像の実在などを検査します。外部サイトの稼働や画像の品質・権利は手動確認が必要です。運用手順は [作品データ管理マニュアル](manual/project-data-management.md) を参照してください。
