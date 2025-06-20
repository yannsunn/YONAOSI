# YONAOSI デプロイメントガイド

## 🚀 Vercelでのデプロイ手順

### 1. Vercelアカウント準備
1. [Vercel](https://vercel.com)にアクセス
2. GitHubアカウントでサインアップ/ログイン

### 2. GitHubリポジトリとの連携
1. Vercelダッシュボードで「New Project」をクリック
2. GitHubリポジトリ「YONAOSI」を選択
3. 以下の設定を行う：

```
Framework Preset: Next.js
Root Directory: yonaosi-site
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

### 3. カスタムドメイン設定

#### 手順:
1. プロジェクトの「Settings」→「Domains」に移動
2. 「Add Domain」で `yonaosi.awakeinc.co.jp` を追加
3. DNS設定が必要な場合、以下のレコードを追加：

```
Type: CNAME
Name: yonaosi
Value: cname.vercel-dns.com
```

### 4. 環境変数設定
1. 「Settings」→「Environment Variables」で以下を設定：

```
NEXT_PUBLIC_APP_NAME=YONAOSI
NEXT_PUBLIC_APP_URL=https://yonaosi.awakeinc.co.jp
```

## 🔍 アクセスできない原因と解決策

### 現在の状況分析
```bash
# DNS解決エラー
curl: (6) Could not resolve host: yonaosi.awakeinc.co.jp
```

### 考えられる原因:
1. **DNS設定が未完了**
   - サブドメイン `yonaosi` のCNAMEレコードが設定されていない
   - DNSの伝播に時間がかかっている（最大48時間）

2. **Vercelプロジェクトが未作成**
   - GitHubリポジトリがVercelに接続されていない
   - カスタムドメインが設定されていない

### 解決手順:

#### 1. 即座に確認できるURL
Vercelデプロイ後、以下のような自動生成URLでアクセス可能：
```
https://yonaosi-xxx.vercel.app
```

#### 2. DNS設定確認
awakeinc.co.jpのDNS管理画面で以下を確認：
```
yonaosi.awakeinc.co.jp CNAME cname.vercel-dns.com
```

#### 3. 段階的なデプロイ確認
1. Vercel自動URLでの動作確認
2. カスタムドメインの追加
3. SSL証明書の自動発行確認

## 📝 緊急時の代替案

### 1. サブディレクトリでの運用
```
https://awakeinc.co.jp/yonaosi/
```

### 2. 別サブドメインでの一時運用
```
https://yonaosi-temp.awakeinc.co.jp/
```

## 🔧 デバッグコマンド

```bash
# DNS確認
nslookup yonaosi.awakeinc.co.jp

# HTTPアクセス確認
curl -I https://yonaosi.awakeinc.co.jp/

# SSL証明書確認
openssl s_client -connect yonaosi.awakeinc.co.jp:443 -servername yonaosi.awakeinc.co.jp
```

## 📞 サポート

問題が解決しない場合：
1. Vercelのサポートに問い合わせ
2. DNS設定の確認（ドメイン管理者に依頼）
3. awakeinc.co.jpの既存設定との競合確認