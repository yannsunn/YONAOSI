# YONAOSIプロジェクト アクセシビリティテストガイド

## 自動テストツール

### 1. axe-core を使用したテスト
```bash
# 開発時の自動テスト
npm install --save-dev @axe-core/react

# ブラウザ拡張機能
# - axe DevTools (Chrome/Firefox)
# - WAVE Web Accessibility Evaluator
```

### 2. Lighthouse Accessibility Audit
```bash
# Chrome DevTools > Lighthouse > Accessibility
# または
npx lighthouse https://localhost:3000 --only-categories=accessibility
```

## 手動テスト項目

### キーボードナビゲーション
- [ ] Tabキーですべてのインタラクティブ要素にアクセス可能
- [ ] Shift+Tabで逆方向移動が可能
- [ ] フォーカス表示が明確に見える
- [ ] Enterキー、Spaceキーで適切に動作
- [ ] ESCキーでモーダルが閉じる

### スクリーンリーダーテスト
- [ ] 見出し構造が論理的（h1 > h2 > h3）
- [ ] alt属性が適切に設定
- [ ] aria-label、aria-describedbyが機能
- [ ] フォーム要素とラベルが関連付け
- [ ] エラーメッセージが読み上げられる

### 色・コントラスト
- [ ] テキストと背景のコントラスト比が4.5:1以上
- [ ] 色だけでなく形状やテキストでも情報伝達
- [ ] ハイコントラストモードでも表示が適切

### モバイルアクセシビリティ
- [ ] タッチターゲットが44px以上
- [ ] ピンチズームが機能
- [ ] 画面の向きを変更しても機能が維持

## テスト用のブラウザ・ツール

### スクリーンリーダー
- **Windows**: NVDA（無料）、JAWS
- **macOS**: VoiceOver（内蔵）
- **iOS**: VoiceOver
- **Android**: TalkBack

### ブラウザ
- Chrome + axe DevTools
- Firefox + アクセシビリティインスペクター
- Safari + VoiceOver
- Edge + Accessibility Insights

### テスト手順
1. 自動テストツールでスキャン
2. キーボードのみで操作テスト
3. スクリーンリーダーで読み上げテスト
4. 色覚テストツールで確認
5. モバイルデバイスでテスト

## 改善優先度

### 高優先度
- キーボード操作不可の要素
- コントラスト不足
- 見出し構造の問題
- フォームラベルの不備

### 中優先度
- aria属性の最適化
- 読み上げ順序の調整
- フォーカス管理の改善

### 低優先度
- 装飾的要素の微調整
- 追加的な説明テキスト

## 継続的改善

### 開発フローに組み込む
1. コンポーネント作成時にアクセシビリティチェック
2. PR前に自動テスト実行
3. 定期的な手動テスト実施
4. ユーザーフィードバックの収集

### リリース前チェックリスト
- [ ] 自動テストツールでエラーなし
- [ ] キーボード操作完了
- [ ] スクリーンリーダーテスト完了
- [ ] コントラスト比確認完了
- [ ] モバイルテスト完了