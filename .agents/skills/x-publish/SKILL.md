---
name: x-publish
description: X Publish の無料埋め込み機能と、Astro 静的サイトへの実装ガイド。
---

# X Publish の無料機能

公式入口: https://publish.x.com/

## 利用できるもの（2026-11-09 確認）

X Publish で生成する埋め込み HTML と `https://platform.x.com/widgets.js` を使い、通常の公開 Web サイトに以下を設置できる。これらの標準埋め込みは X API の有料プランを契約せずに利用できる。

| 機能 | 用途・入力 |
| --- | --- |
| プロフィールの公開ポストのタイムライン | `https://x.com/<handle>` を指定し、公開ポストを表示する |
| 公開リストのタイムライン | 公開リストの URL を指定する |
| 単一ポスト | 公開ポストの URL を指定し、ポスト・添付メディアを埋め込む |
| フォローボタン | 対象アカウントの URL を指定し、フォロー操作へ誘導する |
| 共有ボタン | ページのリンクを X に投稿する |
| メンションボタン | 指定アカウント宛の投稿を作る |
| ハッシュタグボタン | 指定ハッシュタグを付けた投稿を作る |
| メッセージボタン | X のメッセージ画面への導線を設ける |
| 動画・配信の埋め込み | X Publish で対応する公開コンテンツの URL を指定する |

「無料」は標準の埋め込み HTML / JavaScript に関するもの。X API でプロフィール情報・アイコン・投稿を取得する機能とは別物。API の契約や課金条件を推測しない。

## Astro での実装例

公開プロフィール `tanzyto40` のタイムライン:

```astro
<a class="twitter-timeline" data-height="420" data-theme="light" href="https://x.com/tanzyto40">
  X での投稿を見る
</a>
<script is:inline async src="https://platform.x.com/widgets.js" charset="utf-8"></script>
```

フォローボタン（必要な画面だけに設置）:

```astro
<a class="twitter-follow-button" href="https://x.com/tanzyto40" data-show-count="false">
  Follow @tanzyto40
</a>
<script is:inline async src="https://platform.x.com/widgets.js" charset="utf-8"></script>
```

- `widgets.js` は同一ページで原則一度だけ読み込む。
- タイムラインは高さと light/dark テーマを調整できる。ページに合う寸法を選び、巨大な HERO や無意味な余白を作らない。
- ウィジェットを生成できない場合にも `href` の通常リンクが残るようにする。
- 非公開アカウントの投稿は埋め込めない。削除・非公開化された投稿も表示されない場合がある。
- JavaScript 無効・広告/トラッキングブロック・X 側の仕様変更・ネットワーク制限により表示されないことがある。実表示の検証なしに動作確認済みと報告しない。
- 外部スクリプトにより X 側へ閲覧環境等の情報が送られ得る。導入時はプライバシー面も考慮する。
- 埋め込みのデザインは X 公式ウィジェットの制約を受ける。プロフィール画像や自己紹介文を自由に取得する仕組みではない。

## 公式資料

- https://publish.x.com/
- https://help.x.com/ja/using-x/embed-x-feed
- https://help.x.com/ja/using-x/add-follow-button-to-website
- https://help.x.com/ja/using-x/how-to-embed-a-post
- https://help.x.com/en/using-x/x-buttons
- https://help.x.com/en/x-for-websites-ads-info-and-privacy

この一覧を実装の基本資料として使い、通常の画面実装のたびに同じ無料機能を再調査しない。X の仕様変更が疑われる場合のみ公式情報を再確認する。
