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

- 作品の説明文、リポジトリ URL、デモ URL: `src/data/content.ts`
- 日英の表示文言: `src/data/content.ts`
- サイト共通レイアウトと SEO メタデータ: `src/layouts/Base.astro`
- 作品の一覧・詳細: `src/components/`
- スタイル: `src/styles/global.css`

`/` と `/en/` が各言語のトップページです。`/projects/` と `/en/projects/` にも作品一覧があります。

## 作品リポジトリの移行予定

公開作品を `tanzyyy-dev` に集約する予定です。関連する既存の管理元は `stellates`、`marks-dev`、`tanzyyy-dev` です。

現在掲載している THE HOLLYWOOD HACKER のソースリンクは、移行完了まで既存の `stellates/hackhackhack` を参照します。**移行前に推測でリンクを変更しないでください。** デモ URL も公開が確認できるまで設定しません。

作品画像は現状の仮タイポグラフィ表示のままです。実際の画像への差し替えは別途判断します。
