# 東京都 新型冠狀病毒疫情中心

![](https://github.com/tokyo-metropolitan-gov/covid19/workflows/production%20deploy/badge.svg)

[![東京都 新型冠狀病毒疫情中心](https://user-images.githubusercontent.com/1301149/75629392-1d19d900-5c25-11ea-843d-2d4376e3a560.png)](https://stopcovid19.metro.tokyo.lg.jp/)

### [日本語](./README.md) | [English](./README_EN.md) | [Spanish](./README_ES.md) | [Korean](./README_KO.md) | [Chinese (Taiwan)](./README_ZH_TW.md) | [Chinese (Simplified)](./README_ZH_CN.md) | [Vietnamese](./README_VI.md) | [Thai](./README_TH.md)


## 如何貢獻
如果您能對 Issues 中做出各式各樣的修正協助，我們將不勝感激。

詳情請洽[如何貢獻](./.github/CONTRIBUTING_ZH_TW.md)。


## 行動原則
詳情請洽[建立網站的行動原則](./.github/CODE_OF_CONDUCT_ZH_TW.md)。

## 授權
本軟體採 [MIT 授權條款](./LICENSE.txt)釋出。

## 從這個網站衍生出來的東西

請參考[此連結](https://github.com/tokyo-metropolitan-gov/covid19/blob/development/forkedSites.md)

## 給開發者的資訊

### 開發環境建置

- Node.js 版本最低需求：10.19.0 以上

**使用 yarn 的做法**
```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```

**使用 docker compose 的做法**
```bash
# serve with hot reload at localhost:3000
$ docker-compose up --build
```

### 被 `Cannot find module ****` 卡住時

**使用 yarn 的做法**
```
$ yarn install
```

**使用 docker compose 的做法**
```bash
$ docker-compose run --rm app yarn install
```

[please translate me]
### VSCode + Remote Cotainersで開発する場合

1. VSCodeの拡張機能「[Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)」を導入します。
2. [この画像（外部サイト）](https://code.visualstudio.com/docs/remote/containers#_quick-start-try-a-dev-container)のように左下部の「Open Folder in Container」でこのリポジトリのルートを選択すれば環境構築が始まります。

[Topic]
- 設定を変更したい場合は、`.devcontainer/devcontainer.json`を修正してください。<br/>
    詳細は[devcontainer.jsonのリファレンス](https://code.visualstudio.com/docs/remote/containers#_devcontainerjson-reference)を参照してください。
- Remote Container実行時のみ有効な拡張機能「ESlint」を導入していますが、必要に応じて`devcontainer.json`の`extensions`に追加してください。<br/>
    詳細な手順は[こちら（外部サイト）](https://code.visualstudio.com/docs/remote/containers#_managing-extensions)を参照してください。
- 開発環境を再構築する場合は、左下部の「Rebuild Container」を実行してください。
[/please translate me]

### 生產環境/其他環境的判定

關於 `process.env.GENERATE_ENV` 這個值 ,生產環境為 `'production'` ，除此之外為 `'development'` 。
如果只想要在測試環境中執行的話，請利用這個值作為參考。

### Deploy 到 Staging 環境以及正式環境的方法

當 `master` 分支被更新時，HTML 檔案將會在 `production` 分支中被 build 起來，然後正式版網站 https://stopcovid19.metro.tokyo.lg.jp/ 會被更新。

當 `staging` 分支被更新時，HTML 檔案將會在 `gh-pages` 分支中被 build 起來，然後 Staging 版網站 https://stg-covid19-tokyo.netlify.com/ 會被更新。

當 `development` 分支被更新時，HTML 檔案將會在 `dev-pages` 分支中被 build 起來，然後開發版網站 https://dev-covid19-tokyo.netlify.com/ 會被更新。
