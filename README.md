# 新型コロナウイルス感染症対策サイト[千葉県版]

各地で立ち上がっているサイトのまとめ
https://hackmd.io/9TTyyjchR8ufuMd9z08Rcg?view

千葉県のサイト
https://www.pref.chiba.lg.jp/index.html

"対策サイトを作って、がんばろー！（うまい方言がない）"

### 日本語 | [English](./README_EN.md) | [Spanish](./README_ES.md)

## 貢献の仕方
Issues にあるいろいろな修正にご協力いただけると嬉しいですm(_ _)m

詳しくは[貢献の仕方](./.github/CONTRIBUTING.md)を御覧ください。

## Slackグループ
基本的な情報共有は CivicTechZenChiba の Slack にて行っております。
以下招待リンクよりご参加ください。

https://join.slack.com/t/civictechzenchiba/shared_invite/zt-dnurg6f9-tta8UTbhd0fP58dFiBzOMQ

## 行動原則
詳しくは[サイト構築にあたっての行動原則](./.github/CODE_OF_CONDUCT.md)を御覧ください。

## ライセンス
本ソフトウェアは、[MITライセンス](./LICENSE.txt)の元提供されています。

## 開発者向け情報

### 環境構築の手順

- 必要となるNode.jsのバージョン: 10.19.0以上
- eslintエラーが続出しますので、docker-compose を使われることをおすすめします
- 開発版は、covid19-chiba developmentで行っております。
- 関連ツールとして[covid19-chiba-tools](https://github.com/civictechzenchiba/covid19-chiba-tools)があります。ご参照ください。

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

### 開発環境・本番環境への反映

`development` ブランチがアップデートされると、自動的に `dev-pages` ブランチにHTML類がbuildされます。そして、開発用サイト https://development-civictechzenchiba-covid19.netlify.com/ が更新されます。

`master` ブランチがアップデートされると、自動的に `production` ブランチにHTML類がbuildされます。そして、本番サイト https://covid19.civictech.chiba.jp/ が更新されます。

### ブランチルール

development 以外は Pull Request は禁止です。

#### 基本的なブランチ
| 目的 | ブランチ | 確認URL | 備考 |
| ---- | -------- | ---- | ---- |
| 開発 | development | https://development-civictechzenchiba-covid19.netlify.com/ | base branch。基本はこちらに Pull Requestを送ってください |
| 本番 | master | https://covid19.civictech.chiba.jp/ | 管理者以外の Pull Request は禁止です |
