# aymsmsm_link

鮫島 歩 / SAMESHIMA Ayumu のプロフィールリンクページです。

公開URL:

https://aym-same.github.io/aymsmsm_link/

## このリポジトリについて

名刺裏のQRコードから案内するための、広告なし・無料ホスティング向け静的サイトです。

サーバー処理やデータベースは使っていません。GitHub Pagesで `main` ブランチの `/(root)` を公開しています。

## 編集するファイル

普段編集するのは `profile.json` です。

- `name`: 名前
- `title`: 肩書き
- `bio`: 紹介文
- `avatar`: プロフィール画像
- `cover`: 背景画像
- `copyText`: コピー用メールアドレス
- `links`: 表示するリンク
- `theme.accentColor`: アクセントカラー

SNSやチャットアプリのプレビュー文言も整えたい場合は、`index.html` の `<title>`、`description`、`og:title`、`og:description` も同じ内容に更新します。

## 公開上の注意

このリポジトリはPublicです。以下はインターネット上で誰でも見られます。

- `profile.json` の内容
- 掲載しているメールアドレス
- `assets` 内の画像
- Gitのコミット履歴

公開したくない個人情報、非公開資料、APIキー、パスワード、顧客情報は入れないでください。

## GitHub Pages設定

GitHubの `Settings > Pages` で以下を設定しています。

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/(root)`

変更をpushすると、数分後に公開ページへ反映されます。
