# 新型コロナウイルス感染症対策サイト[千葉県版]

 ##各地で立ち上がっているサイトのまとめ
https://hackmd.io/9TTyyjchR8ufuMd9z08Rcg?view

 ##千葉県のサイト
https://www.pref.chiba.lg.jp/index.html

"対策サイトを作って、がんばろー！（うまい方言がない）"

### 日本語 | [English](./README_EN.md) | [Spanish](./README_ES.md)

## 貢献の仕方
Issues にあるいろいろな修正にご協力いただけると嬉しいですm(_ _)m

詳しくは[貢献の仕方](./.github/CONTRIBUTING.md)を御覧ください。

## Slackグループ
基本的な情報共有は CivicTechZenChiba の Slack にて行っております。
以下招待リンクよりご参加ください。

https://join.slack.com/t/civictechzenchiba/shared_invite/zt-co2ez9no-IrVcqEBgofajrM_pp~q8_A

## 行動原則
詳しくは[サイト構築にあたっての行動原則](./.github/CODE_OF_CONDUCT.md)を御覧ください。

## ライセンス
本ソフトウェアは、[MITライセンス](./LICENSE.txt)の元提供されています。

## 開発者向け情報

### 環境構築の手順

- 必要となるNode.jsのバージョン: 10.19.0以上
- eslintエラーが続出しますので、docer composeを使われることをおすすめします
- 開発版は、covid19-chiba　development　で行っております。
- 関連ツールとして　covid19-chiba-tools があります。ご参照ください。

**yarn を使う場合**
``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```

**docker compose を使う場合**
```bash
# serve with hot reload at localhost:3000
$ docker-compose up --build
```

### ステージング・本番環境への反映
