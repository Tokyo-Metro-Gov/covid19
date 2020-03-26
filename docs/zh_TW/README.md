# 東京都 新型冠狀病毒疫情中心

![](https://github.com/tokyo-metropolitan-gov/covid19/workflows/production%20deploy/badge.svg)

[![東京都 新型冠狀病毒疫情中心](https://user-images.githubusercontent.com/1301149/75629392-1d19d900-5c25-11ea-843d-2d4376e3a560.png)](https://stopcovid19.metro.tokyo.lg.jp/)

### [日本語](./../../README.md) | [English](./../en/README.md) | [Español](./../es/README.md) | [한국어](./../ko/README.md) | 繁體中文 | [简体中文](./../zh_CN/README.md) | [Tiếng Việt](./../vi/README.md) | [ภาษาไทย](./../th/README.md) | [Français](./../fr/README.md)


## 如何貢獻
如果您能對 Issues 中做出各式各樣的修正協助，我們將不勝感激。

詳情請洽[如何貢獻](./CONTRIBUTING.md)。


## 行動原則
詳情請洽[建立網站的行動原則](./CODE_OF_CONDUCT.md)。

## 授權
本軟體採 [MIT 授權條款](./../../LICENSE.txt)釋出。

## 從這個網站衍生出來的東西

請參考[此連結](./../../FORKED_SITES.md)

## 給翻譯者的資訊

有要幫忙翻譯的話，請參考 [這個文件](./TRANSLATION.md) 。

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

**使用 Vagrant 的做法**
```bash
# serve with hot reload at localhost:3000
$ vagrant up
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

### VSCode + Remote Containers 的開發環境

1. 安裝 VSCode 的擴充套件「[Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)」。
2. 如同 [這個圖像（外部連結）](https://code.visualstudio.com/docs/remote/containers#_quick-start-try-a-dev-container)點擊左下角的 「Open Folder in Container」 後選擇 Repository 的資料夾路徑開始建立環境。

#### 提示
- 如果想要變更設定，請更改 `.devcontainer/devcontainer.json` 這隻檔案。
詳細請參考 [devcontainer.json的參考值](https://code.visualstudio.com/docs/remote/containers#_devcontainerjson-reference)。
- Remote Container 啟動時擴充套件只有導入 「ESlint」、如果有必要，請在 `devcontainer.json` 的 `extensions` 中新增。
詳細的步驟請參考 [這裡（外部連結）](https://code.visualstudio.com/docs/remote/containers#_managing-extensions)。
- 如果要重新建立開發環境，請執行左下角的 「Rebuild Container」。

### 生產環境/其他環境的判定

關於 `process.env.GENERATE_ENV` 這個值 ,生產環境為 `'production'` ，除此之外為 `'development'` 。  
如果只想要在測試環境中執行的話，請利用這個值作為參考。

### Deploy 到 Staging 環境以及正式環境的方法

當 `master` 分支被更新時，HTML 檔案將會在 `production` 分支中被 build 起來，然後正式版網站 https://stopcovid19.metro.tokyo.lg.jp/ 會被更新。

當 `staging` 分支被更新時，HTML 檔案將會在 `gh-pages` 分支中被 build 起來，然後 Staging 版網站 https://stg-covid19-tokyo.netlify.com/ 會被更新。

當 `development` 分支被更新時，HTML 檔案將會在 `dev-pages` 分支中被 build 起來，然後開發版網站 https://dev-covid19-tokyo.netlify.com/ 會被更新。

### 分支規則

只允許推送 Pull Request 到 `development`  跟 `dev-hotfix` 。
在推送 Pull Request 時，請依照以下命名規則為您的分支命名

新增功能: feature/#{ISSUE_ID}-#{branch_title_name}  
Hotfix: hotfix/#{ISSUE_ID}-{branch_title_name}

#### 基本分支
| 目的 | 分支 | 預覽用 URL | 備註 |
| ---- | -------- | ---- | ---- |
| 開發 | development | https://dev-covid19-tokyo.netlify.com/ | 基本上請推送 Pull Request 到這裡 |
| 緊急修復 | dev-hotfix | 無 | 對於正式版的緊急修復。 在管理員的要求下使用。 |
| 正式版預覽 | staging | https://stg-covid19-tokyo.netlify.com/ | 對於正式版釋出前的最終確認，禁止管理員以外的人推送 Pull Request。 |
| 正式版 | master | https://stopcovid19.metro.tokyo.lg.jp/ | 禁止管理員以外的人推送 Pull Request |
#### 系統所使用的分支
| 目的 | 分支 | 預覽用 URL | 備註 |
| ---- | -------- | ---- | ---- |
| 正式網站 HTML | production | https://stopcovid19.metro.tokyo.lg.jp/ | 生成靜態網站 HTML 的位置 |
| 正式版預覽 HTML | gh-pages | https://stg-covid19-tokyo.netlify.com/ | 生成靜態網站 HTML 的位置 |
| OGP 工作用 | deploy / new_ogp | 無 | OGP 更新用 |
