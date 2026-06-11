# QR Link Page

名刺裏のQRコードから案内するための、広告なし・無料ホスティング向けリンクまとめサイトです。

## 編集する場所

普段編集するのは `profile.json` です。

- `name`: 名前
- `title`: 肩書き
- `bio`: 紹介文
- `avatar`: プロフィール画像
- `cover`: 背景画像
- `copyText`: コピーしたいメールアドレスなど
- `theme.preset`: 雰囲気
- `theme.accentColor`: アクセントカラー
- `theme.buttonStyle`: ボタンの見た目
- `links`: 表示するリンク一覧

## テーマ

`theme.preset` には以下を指定できます。

- `minimal`: 名刺向けの上品な標準テーマ
- `warm`: やわらかく親しみやすい雰囲気
- `event`: 告知やSNS向けの少し華やかな雰囲気
- `dark`: 黒基調の落ち着いた雰囲気
- `japanese`: 和モダン寄りの雰囲気

`theme.buttonStyle` には以下を指定できます。

- `solid`
- `outline`
- `soft`

## リンク種別

`links` の `type` には以下を指定できます。未指定でも表示されます。

- `website`
- `instagram`
- `facebook`
- `x`
- `youtube`
- `tiktok`
- `line`
- `mail`
- `form`
- `map`
- `shop`
- `portfolio`

## 公開方法

GitHub Pages、Cloudflare Pages、Netlify、Vercel などの静的サイトホスティングにそのまま配置できます。

### GitHub Pages

このリポジトリには GitHub Pages 用のワークフローを同梱しています。

1. GitHubで新しいリポジトリを作成します。
2. このフォルダをそのリポジトリへpushします。
3. GitHubのリポジトリ画面で Settings > Pages を開きます。
4. Source を `GitHub Actions` にします。
5. `main` または `master` にpushすると公開されます。

公開URLは通常、以下の形式です。

```text
https://ユーザー名.github.io/リポジトリ名/
```

独自ドメインを使う場合は、GitHub PagesのCustom domainにドメインを設定してください。

### Cloudflare Pages

Cloudflare Pagesで公開する場合は、Cloudflareのダッシュボードで以下の設定にします。

- Framework preset: `None`
- Build command: 空欄
- Build output directory: `/`
- Root directory: `/`

このサイトはビルド不要の静的サイトなので、GitHub連携でpushするだけで公開できます。

## ローカル確認

`profile.json` を読み込むため、ブラウザで `index.html` を直接開くより、簡易サーバーで確認するのがおすすめです。

```powershell
node preview-server.js
```

その後、`http://localhost:8080` を開いてください。

## OGP表示について

SNSやチャットアプリで表示されるプレビュー文言は、サービスによってJavaScript実行前の `index.html` の内容を読むことがあります。
必要に応じて `index.html` の `<title>`、`description`、`og:title`、`og:description` も `profile.json` と同じ内容に変更してください。
