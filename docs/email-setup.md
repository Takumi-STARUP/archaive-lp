# メール自動送信機能セットアップガイド

## 概要
フォーム送信時に自動的にメールを送信する機能の実装が完了しました。
Resendを使用して、管理者への通知メールとお客様への自動返信メールを送信します。

## セットアップ手順

### 1. Resendアカウントの作成
1. [Resend](https://resend.com)にアクセス
2. アカウントを作成（無料プランで開始可能）
3. ダッシュボードからAPIキーを取得

### 2. ドメイン認証（本番環境用）
1. Resendダッシュボードで「Domains」セクションへ
2. 使用するドメイン（例: archaive.jp）を追加
3. DNSレコードを設定：
   - SPFレコード
   - DKIMレコード
   - DMARCレコード（推奨）
4. 認証が完了するまで待つ（通常数分）

### 3. 環境変数の設定
`.env.local`ファイルを作成し、以下の値を設定：

```env
# Resend API設定
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# メール送信設定
ADMIN_EMAIL=admin@archaive.jp,support@archaive.jp  # カンマ区切りで複数指定可能
FROM_EMAIL=noreply@archaive.jp  # 認証済みドメインのメールアドレス

# Slack通知設定（オプション）
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXX
```

### 4. Slack通知の設定（オプション）
1. Slackワークスペースで「Apps」→「Incoming Webhooks」を追加
2. 通知を送信するチャンネルを選択
3. Webhook URLをコピーして環境変数に設定

## 機能詳細

### 実装済み機能
- ✅ 管理者への通知メール送信
- ✅ お客様への自動返信メール送信
- ✅ HTMLメールテンプレート（レスポンシブ対応）
- ✅ Slack通知（オプション）
- ✅ レート制限（15分間に5回まで）
- ✅ エラーハンドリング
- ✅ 環境変数による設定管理
- ✅ データベース保存（SQLite/PostgreSQL）
- ✅ リード管理画面
- ✅ メール送信ログ記録

### メール送信フロー
1. フォーム送信
2. バリデーション
3. レート制限チェック
4. データベース保存（Leadテーブル）
5. 管理者へ通知メール送信
6. お客様へ自動返信メール送信  
7. メール送信ログ記録（EmailLogテーブル）
8. Slack通知（設定時のみ）
9. レスポンス返却

## データベース管理

### リード管理画面
```
http://localhost:3000/admin/leads
```
リード一覧を閲覧し、ステータスや優先度を管理できます。

### Prisma Studio（データベースGUI）
```bash
npx prisma studio
```
ブラウザでデータベースを直接操作できます。

## テスト方法

### 開発環境でのテスト
```bash
# 1. 開発サーバーを起動
npm run dev

# 2. 別のターミナルでテストスクリプトを実行
node scripts/test-email.js
```

### 手動テスト
1. ブラウザでフォームページを開く
2. テストデータを入力
3. 送信ボタンをクリック
4. メールとSlack通知を確認

## トラブルシューティング

### メールが届かない場合
- [ ] 環境変数が正しく設定されているか確認
- [ ] Resend APIキーが有効か確認
- [ ] ドメイン認証が完了しているか確認（本番環境）
- [ ] スパムフォルダを確認
- [ ] Resendダッシュボードでログを確認

### エラーが発生する場合
- [ ] `npm install resend`が実行されているか確認
- [ ] Next.jsサーバーを再起動
- [ ] ブラウザのコンソールとサーバーログを確認

### レート制限エラー
- 15分間に5回以上送信するとエラーになります
- 開発時はレート制限を調整可能（`src/lib/rate-limit.ts`）

## 今後の拡張案
- [ ] CRM連携（HubSpot、Salesforce等）
- [ ] メールテンプレートのカスタマイズ機能
- [ ] A/Bテスト機能
- [ ] メール送信履歴の詳細表示
- [ ] CSVエクスポート機能
- [ ] リードスコアリング機能
- [ ] reCAPTCHA統合（スパム対策）
- [ ] メール開封率トラッキング

## 関連ファイル
- `/src/app/api/contact/route.ts` - フォーム送信APIエンドポイント
- `/src/app/api/leads/route.ts` - リード管理API
- `/src/app/admin/leads/page.tsx` - リード管理画面
- `/src/hooks/useContactForm.ts` - フォームフック
- `/src/lib/rate-limit.ts` - レート制限
- `/src/lib/prisma.ts` - Prismaクライアント
- `/prisma/schema.prisma` - データベーススキーマ
- `/.env.local.example` - 環境変数テンプレート
- `/scripts/test-email.js` - テストスクリプト