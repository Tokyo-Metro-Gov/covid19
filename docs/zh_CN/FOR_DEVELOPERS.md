# 面向开发者信息

## 1. 开发环境搭建

[PLEASE TRANSLATE ME]

Install the following application to the environment for development.

| Application name | Application version(Fill in only if specified) | Installation conditions |
| ------- | ------- | ------- |
|[Node.js](https://nodejs.org/zh-cn/)|10.19.0以上|Required|
|[Visual Studio Code](https://code.visualstudio.com/)| |If you use Visual Studio Code|
|[yarn](https://classic.yarnpkg.com/zh-Hans/)| |When executing this program with `yarn`|
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

### 2-1. 使用 `yarn` 时

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

##### 2-1-2-2. 禁用辅助功能检查（vue-axe）的方法

当本地开发服务器占用资源较多时，可按如下方式禁用辅助功能检查并启动。

```bash
# serve with hot reload at localhost:3000
$ yarn dev-no-axe
```

[PLEASE TRANSLATE ME]

### 2-1-3. Troubleshoot

[/PLEASE TRANSLATE ME]

#### 2-1-3-1. 出现 `Cannot find module ****` 的error時

[PLEASE TRANSLATE ME]

Build the dependency again and run the program.

[/PLEASE TRANSLATE ME]

### 2-2. 使用 `docker compose` 时

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

#### 2-2-2-1. 出现 `Cannot find module ****` 的error時

[PLEASE TRANSLATE ME]

Stop the program and execute the following command.

[/PLEASE TRANSLATE ME]

```bash
$ docker-compose run --rm app yarn install
```

### 2-3. 使用 `Vagrant` 时

[PLEASE TRANSLATE ME]

#### 2-3-1. Install dependencies and run this program

After executing the following command, you can check the program under development by accessing http://localhost:3000 .

[/PLEASE TRANSLATE ME]

```bash
# serve with hot reload at localhost:3000
$ vagrant up
```

### 2-4. Visual Studio Code + Remote Containers 的开发环境

[PLEASE TRANSLATE ME]

#### 2-4-1. Install dependencies and run this program

[/PLEASE TRANSLATE ME]

参考 [Quick start: Try a dev container（外部链接）](https://code.visualstudio.com/docs/remote/containers#_quick-start-try-a-dev-container)点击左下角的 「Open Folder in Container」 之后选择 Repository 文件夹建立环境。

[PLEASE TRANSLATE ME]

You can check the program under development by accessing http://localhost:3000 after building the environment.

[/PLEASE TRANSLATE ME]

#### 2-4-2. 提示

- 如果想要更改设定，请更改 `.devcontainer/devcontainer.json` 文件。
详情请参考 [devcontainer.json reference（外部链接）](https://code.visualstudio.com/docs/remote/containers#_devcontainerjson-reference)。
- Remote Container 启动时插件只导入了 「ESlint」。如有必要，请在 `.devcontainer/devcontainer.json` 的 `extensions` 中新增。
详细步骤请参考 [Managing extensions（外部链接）](https://code.visualstudio.com/docs/remote/containers#_managing-extensions)。
- 如需重新建立开发环境，请点击左下角的 「Rebuild Container」。

---

## 3. 判断生产环境/其他环境

`process.env.GENERATE_ENV` 这个值在生产环境为 `'production'` 除此之外为 `'development'` 。
如果只想要在测试环境中运行的话，请使用这个值作为参考。

---

## 4. 发布到 Staging环境以及正式环境的方法

[PLEASE TRANSLATE ME]

When the branch listed in the left column of the table below is updated, the branch and website will be updated automatically.

| branch | A branch where HTML is built and updated | Website updated |
| ---- | ---- | ---- |
|`master`|`production`|The production site https://stopcovid19.metro.tokyo.lg.jp/|
|`staging`|`gh-pages`|The staging site https://stg-covid19-tokyo.netlify.app/|
|`development`|`dev-pages`|The development site https://dev-covid19-tokyo.netlify.app/|

[/PLEASE TRANSLATE ME]

---

## 5. 规则

只允许推送 Pull Request 到 `development` 分支。
在推送 Pull Request 时，请按照以下命名规则为您的分支命名：

[PLEASE TRANSLATE ME]

| Types of changes | Naming rules for the branch |
| ---- | ---- |
|新增功能|`feature/#{ISSUE_ID}-#{branch_title_name}`|
|Hotfix commit|`hotfix/#{ISSUE_ID}-#{branch_title_name}`|

[/PLEASE TRANSLATE ME]

### 5-1. 基本分支

[PLEASE TRANSLATE ME]

| 目的 | 分支 | 预览用 URL | People who can make pull requests | 备注 |
| ---- | ---- | ---- | ---- | ---- |
| 开发 | development | https://dev-covid19-tokyo.netlify.app/ | All developers | 基本上请推送 Pull Request 到这里 |
| 紧急修复 | dev-hotfix | 无 | 对正式版的紧急修复。在管理员的要求下使用。 |
| 正式版预览 | staging | https://stg-covid19-tokyo.netlify.app/ | Only administrators | 对于正式版发布前的最终确认，禁止管理员以外的人推送 Pull Request。 |
| 正式版 | master | https://stopcovid19.metro.tokyo.lg.jp/ | Only administrators | 禁止管理员以外的人推送 Pull Request |

[/PLEASE TRANSLATE ME]

### 5-2. 系统所使用的分支

| 目的 | 分支 | 预览用 URL | 备注 |
| ---- | ---- | ---- | ---- |
| 正式网站 HTML | production | https://stopcovid19.metro.tokyo.lg.jp/ | 生成静态网站 HTML 的位置 |
| 正式版预览 HTML | gh-pages | https://stg-covid19-tokyo.netlify.app/ | 生成静态网站 HTML 的位置 |
| OGP 工作用 | deploy / new_ogp | 无 | OGP 更新用 |
