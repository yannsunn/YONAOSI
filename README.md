# YONAOSI - 人生転換期支援プラットフォーム

## 概要

YONAOSIは、「お金の不安から解放される、新しい生き方へ」をコンセプトに、ライフプランニングと資産形成を中核としたファイナンシャルプランニングサービスです。

### 主な特徴

- **心理的訴求を最大化したUI/UX**: ユーザーの不安を可視化し、希望へと変換
- **包括的なサポート体制**: 税金、保険、住宅、キャリアなど多様な専門分野でサポート
- **リアルタイムシミュレーション**: 資産形成の未来を可視化
- **中立的な立場**: 特定の商品販売ではなく、お客様に最適な選択をサポート

## 技術スタック

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **UI Components**: Radix UI
- **Charts**: Recharts

## セットアップ

### 必要な環境
- Node.js 18.0.0以上
- npm または yarn

### インストール

```bash
cd yonaosi-site
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで http://localhost:3000 を開いてください。

### ビルド

```bash
npm run build
npm start
```

## プロジェクト構造

```
yonaosi-site/
├── src/
│   └── app/
│       ├── layout.tsx      # ルートレイアウト
│       ├── page.tsx        # ホームページ
│       └── globals.css     # グローバルスタイル
├── components/             # Reactコンポーネント
│   ├── Header.tsx         # ヘッダー
│   ├── HeroSection.tsx    # ヒーローセクション
│   ├── ProblemSolutionSection.tsx  # 問題解決セクション
│   ├── DataDrivenResults.tsx      # 実績データセクション
│   ├── LifeStageTabs.tsx          # ライフステージ別プラン
│   ├── AssetSimulator.tsx         # 資産形成シミュレーター
│   ├── SupportCards.tsx           # サポートプログラム一覧
│   ├── PowerfulCTA.tsx            # CTAセクション
│   └── Footer.tsx                 # フッター
├── public/                # 静的アセット
├── styles/                # スタイルファイル
└── utils/                 # ユーティリティ関数
```

## カラーパレット

- メイン: ソフトオレンジ (#FFB98B)
- アクセント1: ペールグリーン (#98D8BF)
- アクセント2: ペールブルー (#A8D8FF)
- ベース: オフホワイト (#F8F9FA)
- テキスト: ダークグレー (#333333)

## 主な機能

### 1. インタラクティブな問題解決提案
- ユーザーの悩みを可視化
- 具体的な解決策と効果を提示
- 実績データに基づく信頼性

### 2. リアルタイム資産形成シミュレーター
- 年齢、収入、投資額から将来資産を計算
- グラフィカルな表示で直感的理解
- 具体的なアクションプランの提示

### 3. ライフステージ別カスタマイズ
- 3つのライフステージに対応
- 各ステージ特有の課題と解決策
- 個別最適化されたアドバイス

### 4. 専門サポートプログラム
- 税金最適化（適切な節税アドバイス）
- キャリアアップ支援（転職・昇進サポート）
- 住居費削減（住宅関連コスト見直し）
- ローン見直し（金利最適化サポート）
- 光熱費削減（エネルギー効率化）
- 資産形成加速（リスク管理型運用）

## ライセンス

© 2025 YONAOSI. All Rights Reserved.