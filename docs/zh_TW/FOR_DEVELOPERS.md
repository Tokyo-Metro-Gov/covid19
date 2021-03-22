# 給開發者的資訊

## 1. 開發環境建置

安裝下列的應用程式來建構開發環境：

| 應用程式名稱 | 應用程式版本(有特定版本才填寫) | 安裝要求 |
| ------- | ------- | ------- |
|[Node.js](https://nodejs.org/zh-tw/)|14.16.0 以上|必要|
|[Visual Studio Code](https://code.visualstudio.com/)| |如果你使用 Visual Studio Code|
|[yarn](https://classic.yarnpkg.com/zh-Hant/)| |使用 `yarn` 執行本專案時|
|[docker compose](https://docs.docker.com/compose/install/)| |使用 `docker compose` 直襲本專案時|
|[Vagrant](https://www.vagrantup.com/)| |使用 `Vagrant` 執行本專案時|

### 1-1. Visual Studio Code 的套件

要使用 Visual Studio Code，請安裝以下套件。

| 套件 | 安裝要求 |
| ------- | ------- |
|[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)|任意|
|[Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)|任意|
|[TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)|任意|
|[Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)|任意|
|[Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)|當使用 Visual Studio Code 和遠端容器來開發|

---

## 2. 執行此專案

請在根目錄(root)下執行此命令。


### 2-1. 使用 `yarn` 的做法

#### 2-1-1. 安裝相依套件

```bash
# install dependencies
$ yarn install
```

#### 2-1-2. 執行專案

執行了這個命令後，你就可以存取 `http://localhost:3000` 來查看 development 分支中的程式。

##### 2-1-2-1. 一般

```bash
# serve with hot reload at localhost:3000
$ yarn dev
```

##### 2-1-2-2. 快速

你可以不啟用 accessibility auditing (它可以使你的 local server 變得更快)

```bash
# serve with hot reload at localhost:3000
$ yarn dev-no-axe
```

### 2-1-3. Troubleshoot

#### 2-1-3-1. 被 `Cannot find module ****` 卡住時

重新建置(build)一次相依套件然後重新執行專案。

### 2-2. 使用 `docker compose` 的做法

#### 2-2-1. 安裝相依套件然後執行此專案

執行了這個命令後，你就可以存取 `http://localhost:3000` 來查看 development 分支中的程式。

```bash
# serve with hot reload at localhost:3000
$ docker-compose up --build
```

### 2-2-2. Troubleshoot

#### 2-2-2-1. 被 `Cannot find module ****` 卡住時

停止程式並執行下列指令。

```bash
$ docker-compose run --rm app yarn install
```

### 2-3. 使用 `Vagrant` 的做法

#### 2-3-1. 安裝相依套件然後執行此專案

執行了這個命令後，你就可以存取 `http://localhost:3000` 來查看 development 分支中的程式。

```bash
# serve with hot reload at localhost:3000
$ vagrant up
```

### 2-4. Visual Studio Code + Remote Containers 的開發環境

#### 2-4-1. 安裝相依套件然後執行此專案

如同 [Quick start: Try a dev container（外部連結）](https://code.visualstudio.com/docs/remote/containers#_quick-start-try-a-dev-container)點擊左下角的 「Open Folder in Container」 後選擇 Repository 的資料夾路徑開始建立環境。

建置好環境以後後，你就可以存取 `http://localhost:3000` 來查看 development 分支中的程式。

#### 2-4-2. 提示

- 如果想要變更設定，請更改 `.devcontainer/devcontainer.json` 這隻檔案。
詳細請參考 [devcontainer.json reference（外部連結）](https://code.visualstudio.com/docs/remote/containers#_devcontainerjson-reference)。
- Remote Container 啟動時擴充套件只有導入 「ESlint」、如果有必要，請在 `.devcontainer/devcontainer.json` 的 `extensions` 中新增。
詳細的步驟請參考 [Managing extensions（外部連結）](https://code.visualstudio.com/docs/remote/containers#_managing-extensions)。
- 如果要重新建立開發環境，請執行左下角的 「Rebuild Container」。

---

## 3. 生產環境/其他環境的判定

關於 `process.env.GENERATE_ENV` 這個值，生產環境為 `'production'` ，除此之外為 `'development'` 。  
如果只想要在測試環境中執行的話，請利用這個值作為參考。

---

## 4. Deploy 到 Staging 環境以及正式環境的方法

當下表左欄所列的分支更新後，分支和網站將會自動被更新。

| 分支 | HTML 建置與更新的分支 | 網站更新 |
| ---- | ---- | ---- |
|`master`|`production`|The production site https://stopcovid19.metro.tokyo.lg.jp/|
|`staging`|`gh-pages`|The staging site https://stg-covid19-tokyo.netlify.app/|
|`development`|`dev-pages`|The development site https://dev-covid19-tokyo.netlify.app/|

---

## 5. 分支規則

只允許推送 Pull Request 到 `development` 。
在推送 Pull Request 時，請依照以下命名規則為您的分支命名

| 變更種類 | 分支的命名規則 |
| ---- | ---- |
|新增功能|`feature/#{ISSUE_ID}-#{branch_title_name}`|
|Hotfix commit|`hotfix/#{ISSUE_ID}-#{branch_title_name}`|

### 5-1. 基本分支


| 目的 | 分支 | 預覽用 URL | 誰可以發 Pull Request | 備註 |
| ---- | ---- | ---- | ---- | ---- |
| 開發 | development | https://dev-covid19-tokyo.netlify.app/ | All developers | 基本上請推送 Pull Request 到這裡 |
| 正式版預覽 | staging | https://stg-covid19-tokyo.netlify.app/ | Only administrators | 對於正式版釋出前的最終確認，禁止管理員以外的人推送 Pull Request。 |
| 正式版 | master | https://stopcovid19.metro.tokyo.lg.jp/ | Only administrators | 禁止管理員以外的人推送 Pull Request |


### 5-2. 系統所使用的分支

| 目的 | 分支 | 預覽用 URL | 備註 |
| ---- | -------- | ---- | ---- |
| 正式網站 HTML | production | https://stopcovid19.metro.tokyo.lg.jp/ | 生成靜態網站 HTML 的位置 |
| 正式版預覽 HTML | gh-pages | https://stg-covid19-tokyo.netlify.app/ | 生成靜態網站 HTML 的位置 |
| OGP 工作用 | deploy / new_ogp | 無 | OGP 更新用 |
