# 山口県 新型コロナウイルス感染症対策サイト

[](
![](https://github.com/tokyo-metropolitan-gov/covid19/workflows/production%20deploy/badge.svg)
)

[![山口県 新型コロナウイルス感染症対策サイト](https://user-images.githubusercontent.com/42875682/76772976-17a3bd80-67e5-11ea-8f4e-ab01df696fc6.png)](https://covid19-yamaguchi.netlify.com/)


## 貢献の仕方
Issues にあるいろいろな修正にご協力いただけると嬉しいです。


## 行動原則
詳しくは[サイト構築にあたっての行動原則](./.github/CODE_OF_CONDUCT.md)を御覧ください。

## ライセンス
本ソフトウェアは、[MITライセンス](./LICENSE.txt)の元提供されています。

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

`master` ブランチがアップデートされると、自動的に `production` ブランチにHTML類がbuildされます。そして、本番サイト https://covid19-yamaguchi.netlify.com/ が更新されます。

~~`staging` ブランチがアップデートされると、自動的に `gh-pages` ブランチにHTML類がbuildされます。そして、ステージングサイト https://stg-covid19-yamaguchi.netlify.com/ が更新されます。~~

`development` ブランチがアップデートされると、自動的に `dev-pages` ブランチにHTML類がbuildされます。そして、開発用サイト https://dev-covid19-yamaguchi.netlify.com/ が更新されます。
