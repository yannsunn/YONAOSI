#!/bin/bash

# agent-send.sh - エージェント間通信スクリプト

if [ $# -ne 2 ]; then
    echo "Usage: $0 <recipient> <message>"
    exit 1
fi

RECIPIENT=$1
MESSAGE=$2
TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")

# メッセージログディレクトリ作成
mkdir -p ./messages

# メッセージファイル作成
echo "[$TIMESTAMP] From: PRESIDENT To: $RECIPIENT" > ./messages/${RECIPIENT}_latest.txt
echo "$MESSAGE" >> ./messages/${RECIPIENT}_latest.txt

# メッセージ履歴に追加
echo "[$TIMESTAMP] From: PRESIDENT To: $RECIPIENT" >> ./messages/history.log
echo "$MESSAGE" >> ./messages/history.log
echo "---" >> ./messages/history.log

echo "✓ メッセージを $RECIPIENT に送信しました"