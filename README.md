# 鹿児島県新型コロナウイルスまとめサイト

![](https://github.com/codeforkagoshima/covid19/workflows/production%20deploy/badge.svg)

[![鹿児島県新型コロナウイルスまとめサイト](./static/ogp.png)](https://covid19.code4kagoshima.org/)

### 日本語 | [English](./README_EN.md)

## 貢献の仕方
Issues にあるいろいろな修正にご協力いただけると嬉しいです。

詳しくは[貢献の仕方](./.github/CONTRIBUTING.md)を御覧ください。


## 行動原則
詳しくは[サイト構築にあたっての行動原則](./.github/CODE_OF_CONDUCT.md)を御覧ください。

## ライセンス
本ソフトウェアは、[MITライセンス](./LICENSE.txt)の元提供されています。

## このサイトから派生したサイト

[Link先](./forkedSites.md)を御覧ください。

## 開発者向け情報

### 環境構築の手順

- 必要となるNode.jsのバージョン: 10.19.0以上

**yarn を使う場合**
```bash
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

### `Cannot find module ****` と怒られた時

**yarn を使う場合**
```bash
$ yarn install
```

**docker compose を使う場合**
```bash
$ docker-compose run --rm app yarn install
```

### ステージング・本番環境への反映
GitHub Actionsでデプロイをしています。設定は `.github/workflows/` 以下のファイルをご確認ください。

#### 本番環境
https://covid19.code4kagoshima.org/

#### ステージング環境
https://staging-covid19.code4kagoshima.org/

#### 開発環境
https://development-covid19.code4kagoshima.org/
