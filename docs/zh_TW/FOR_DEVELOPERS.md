# 給開發者的資訊

## 1. 開發環境建置

[PLEASE TRANSLATE ME]

Install the following application to the environment for development.

| Application name | Application version(Fill in only if specified) | Installation conditions |
| ------- | ------- | ------- |
|[Node.js](https://nodejs.org/zh-tw/)|10.19.0 以上|Required|
|[Visual Studio Code](https://code.visualstudio.com/)| |If you use Visual Studio Code|
|[yarn](https://classic.yarnpkg.com/zh-Hant/)| |When executing this program with `yarn`|
|[docker compose](https://docs.docker.com/compose/install/)| |When executing this program with `docker compose`|
|[Vagrant](https://www.vagrantup.com/)| |When executing this program with `Vagrant`|

### 1-1. Extensions for Visual Studio Code

To use Visual Studio Code, install the following extension.

| Extensions | Installation conditions |
| ------- | ------- |
|[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)|Any|
|[Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)|Any|
|[TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)|Any|
|[Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)|Any|
|[Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)|When developing with Visual Studio Code and Remote Containers|

---

## 2. Run this program

The command is executed in the working copy root directory.

[/PLEASE TRANSLATE ME]

### 2-1. 使用 `yarn` 的做法

[PLEASE TRANSLATE ME]

#### 2-1-1. Install dependencies

[/PLEASE TRANSLATE ME]

```bash
# install dependencies
$ yarn install
```

[PLEASE TRANSLATE ME]

#### 2-1-2. Run this program

After executing the following command, you can check the program under development by accessing http://localhost:3000 .

##### 2-1-2-1. Normal

[/PLEASE TRANSLATE ME]

```bash
# serve with hot reload at localhost:3000
$ yarn dev
```

[PLEASE TRANSLATE ME]

##### 2-1-2-2. Faster

You can disable accessibility auditing, which would make your local server faster.

[/PLEASE TRANSLATE ME]

```bash
# serve with hot reload at localhost:3000
$ yarn dev-no-axe
```

[PLEASE TRANSLATE ME]

### 2-1-3. Troubleshoot

[/PLEASE TRANSLATE ME]

#### 2-1-3-1. 被 `Cannot find module ****` 卡住時

Build the dependency again and run the program.

### 2-2. 使用 `docker compose` 的做法

[PLEASE TRANSLATE ME]

#### 2-2-1. Install dependencies and run this program

After executing the following command, you can check the program under development by accessing http://localhost:3000 .

[/PLEASE TRANSLATE ME]

```bash
# serve with hot reload at localhost:3000
$ docker-compose up --build
```

[PLEASE TRANSLATE ME]

### 2-2-2. Troubleshoot

[/PLEASE TRANSLATE ME]

#### 2-2-2-1. 被 `Cannot find module ****` 卡住時

[PLEASE TRANSLATE ME]

Stop the program and execute the following command.

[/PLEASE TRANSLATE ME]

```bash
$ docker-compose run --rm app yarn install
```

### 2-3. 使用 `Vagrant` 的做法

[PLEASE TRANSLATE ME]

#### 2-3-1. Install dependencies and run this program

After executing the following command, you can check the program under development by accessing http://localhost:3000 .

[/PLEASE TRANSLATE ME]

```bash
# serve with hot reload at localhost:3000
$ vagrant up
```

### 2-4. Visual Studio Code + Remote Containers 的開發環境

[PLEASE TRANSLATE ME]

#### 2-4-1. Install dependencies and run this program

[/PLEASE TRANSLATE ME]

如同 [Quick start: Try a dev container（外部連結）](https://code.visualstudio.com/docs/remote/containers#_quick-start-try-a-dev-container)點擊左下角的 「Open Folder in Container」 後選擇 Repository 的資料夾路徑開始建立環境。

[PLEASE TRANSLATE ME]

You can check the program under development by accessing http://localhost:3000 after building the environment.

[/PLEASE TRANSLATE ME]

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

[PLEASE TRANSLATE ME]

When the branch listed in the left column of the table below is updated, the branch and website will be updated automatically.

| branch | A branch where HTML is built and updated | Website updated |
| ---- | ---- | ---- |
|`master`|`production`|The production site https://stopcovid19.metro.tokyo.lg.jp/|
|`staging`|`gh-pages`|The staging site https://stg-covid19-tokyo.netlify.app/|
|`development`|`dev-pages`|The development site https://dev-covid19-tokyo.netlify.app/|

[/PLEASE TRANSLATE ME]

---

## 5. 分支規則

只允許推送 Pull Request 到 `development` 。
在推送 Pull Request 時，請依照以下命名規則為您的分支命名

[PLEASE TRANSLATE ME]

| Types of changes | Naming rules for the branch |
| ---- | ---- |
|新增功能|`feature/#{ISSUE_ID}-#{branch_title_name}`|
|Hotfix commit|`hotfix/#{ISSUE_ID}-#{branch_title_name}`|

[/PLEASE TRANSLATE ME]

### 5-1. 基本分支

[PLEASE TRANSLATE ME]

| 目的 | 分支 | 預覽用 URL | People who can make pull requests | 備註 |
| ---- | ---- | ---- | ---- | ---- |
| 開發 | development | https://dev-covid19-tokyo.netlify.app/ | All developers | 基本上請推送 Pull Request 到這裡 |
| 正式版預覽 | staging | https://stg-covid19-tokyo.netlify.app/ | Only administrators | 對於正式版釋出前的最終確認，禁止管理員以外的人推送 Pull Request。 |
| 正式版 | master | https://stopcovid19.metro.tokyo.lg.jp/ | Only administrators | 禁止管理員以外的人推送 Pull Request |

[/PLEASE TRANSLATE ME]

### 5-2. 系統所使用的分支

| 目的 | 分支 | 預覽用 URL | 備註 |
| ---- | -------- | ---- | ---- |
| 正式網站 HTML | production | https://stopcovid19.metro.tokyo.lg.jp/ | 生成靜態網站 HTML 的位置 |
| 正式版預覽 HTML | gh-pages | https://stg-covid19-tokyo.netlify.app/ | 生成靜態網站 HTML 的位置 |
| OGP 工作用 | deploy / new_ogp | 無 | OGP 更新用 |
