# 鹿児島県 新型コロナウイルス感染症対策サイト

![](https://github.com/codeforkagoshima/covid19/workflows/production%20deploy/badge.svg)

### 日本語 | [English](./README_EN.md) | [Spanish](./README_ES.md) | [Korean](./README_KO.md) | [Chinese (Taiwan)](./README_ZH_TW.md)

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

### ステージング・本番環境への反映

`master` ブランチがアップデートされると、自動的に本番サイト https://covid19.codeforkagoshima.dev/ が更新されます。

`staging` ブランチがアップデートされると、自動的にステージングサイト https://staging-covid19.codeforkagoshima.dev/ が更新されます。

`development` ブランチがアップデートされると、自動的に開発用サイト https://development-covid19.codeforkagoshima.dev/ が更新されます。
