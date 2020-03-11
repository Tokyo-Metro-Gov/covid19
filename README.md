# 愛知県 新型コロナウイルス感染症対策サイト

![](https://github.com/code4nagoya/covid19/workflows/production%20deploy/badge.svg)

[![愛知県 新型コロナウイルス感染症対策サイト](https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/89384411_3894244213920910_6080693635433627648_o.jpg?_nc_cat=101&_nc_sid=ca434c&_nc_ohc=3nng60TwA4gAX_zj-mW&_nc_ht=scontent-lax3-1.xx&oh=df8364ef052034ec9dfcc629da21490b&oe=5EA5E01E)](http://stopcovid19.code4.nagoya/)

### 日本語

## 貢献の仕方
Issues にあるいろいろな修正にご協力いただけると嬉しいです。

詳しくは[貢献の仕方](./.github/CONTRIBUTING.md)を御覧ください。


## 行動原則
詳しくは[サイト構築にあたっての行動原則](./.github/CODE_OF_CONDUCT.md)を御覧ください。

## ライセンス
本ソフトウェアは、[MITライセンス](./LICENSE.txt)の元提供されています。

## 開発者向け情報

### 環境構築の手順

- 必要となるNode.jsのバージョン: 10.19.0以上

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

### 開発・本番環境への反映

`master` ブランチがアップデートされると、自動的に `production` ブランチにHTML類がbuildされます。そして、本番サイト http://stopcovid19.code4.nagoya/ が更新されます。

`development` ブランチがアップデートされると、自動的に `dev-pages` ブランチにHTML類がbuildされます。そして、開発用サイト https://dev-covid19-aichi.netlify.com/ が更新されます。
