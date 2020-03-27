# 东京都 新型冠状病毒对策网

![](https://github.com/tokyo-metropolitan-gov/covid19/workflows/production%20deploy/badge.svg)

[![东京都 新型冠状病毒对策网](https://user-images.githubusercontent.com/1301149/75629392-1d19d900-5c25-11ea-843d-2d4376e3a560.png)](https://stopcovid19.metro.tokyo.lg.jp/)

### [日本語](./../../README.md) | [English](./../en/README.md) | [Español](./../es/README.md) | [한국어](./../ko/README.md) | [繁體中文](./../zh_TW/README.md) | 简体中文 | [Tiếng Việt](./../vi/README.md) | [ภาษาไทย](./../th/README.md) | [Français](./../fr/README.md)

## 如何贡献
如果您能对 Issus 中做出各式各样的修改协助，我们将不胜感激。

详细请参照[如何贡献](./CONTRIBUTING.md)。


## 行动准则
详细请参照[建站行动原则](./CODE_OF_CONDUCT.md)。

## 授权
本软件采用[MIT授权条款](./../../LICENSE.txt)。

## 从这个网站衍生出来的东西

请参考[此链接](./../../FORKED_SITES.md)

## 给翻译者的信息

有要帮忙翻译的话，请参考[这个文件](./TRANSLATION.md) 。

请查看 [如何翻译](./../../TRANSLATION.md) 文档。

## 面向开发者信息

### 开发环境搭建

- Node.js 版本最低需求: 10.19.0以上

**使用 yarn 时**

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```

**使用 docker compose 时**

```bash
# serve with hot reload at localhost:3000
$ docker-compose up --build
```

**使用 Vagrant 时**
```bash
# serve with hot reload at localhost:3000
$ vagrant up
```

### 出现 `Cannot find module ****` 的error時

**使用 yarn 时**
```
$ yarn install
```

**使用 docker compose 时**
```bash
$ docker-compose run --rm app yarn install
``

### VSCode + Remote Containers 的开发环境

1. 安装 VSCode 插件 [Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)」。
2. 参考 [此图片（外部链接）](https://code.visualstudio.com/docs/remote/containers#_quick-start-try-a-dev-container)点击左下角的 「Open Folder in Container」 之后选择 Repository 文件夹建立环境。

#### 提示
- 如果想要更改设定，请更改 `.devcontainer/devcontainer.json` 文件。
详情请参考 [devcontainer.json的参考值](https://code.visualstudio.com/docs/remote/containers#_devcontainerjson-reference)。
- Remote Container 启动时插件只导入了 「ESlint」。如有必要，请在 `devcontainer.json` 的 `extensions` 中新增。
详细步骤请参考 [这里（外部链接）](https://code.visualstudio.com/docs/remote/containers#_managing-extensions)。
- 如需重新建立开发环境，请点击左下角的 「Rebuild Container」。

### 判断生产环境/其他环境

`process.env.GENERATE_ENV` 这个值在生产环境为 `'production'` 除此之外为 `'development'` 。
如果只想要在测试环境中运行的话，请使用这个值作为参考。

### 发布到 Staging环境以及正式环境的方法

`master` 分支更新时，自动将 `production` 分支中的HTML类(build)后发布到正式版 https://stopcovid19.metro.tokyo.lg.jp/

`staging` 分支更新时，自动将 `gh-pages` 分支中的HTML类(build)后发布到Staging版 https://stg-covid19-tokyo.netlify.com/

`development` 分支更新时，自动将 `dev-pages` 分支中的HTML类(build)后发布到开发版 https://dev-covid19-tokyo.netlify.com/

### 规则

只允许推送 Pull Request 到 `development`  和 `dev-hotfix` 分支。
在推送 Pull Request 时，请按照以下命名规则为您的分支命名：

新增功能: feature/#{ISSUE_ID}-#{branch_title_name}
Hotfix: hotfix/#{ISSUE_ID}-{branch_title_name}

#### 基本分支
| 目的 | 分支 | 预览用 URL | 备注 |
| ---- | -------- | ---- | ---- |
| 开发 | development | https://dev-covid19-tokyo.netlify.com/ | 基本上请推送 Pull Request 到这里 |
| 紧急修复 | dev-hotfix | 无 | 对正式版的紧急修复。在管理员的要求下使用。 |
| 正式版预览 | staging | https://stg-covid19-tokyo.netlify.com/ | 对于正式版发布前的最终确认，禁止管理员以外的人推送 Pull Request。 |
| 正式版 | master | https://stopcovid19.metro.tokyo.lg.jp/ | 禁止管理员以外的人推送 Pull Request |
#### 系统所使用的分支
| 目的 | 分支 | 预览用 URL | 备注 |
| ---- | -------- | ---- | ---- |
| 正式网站 HTML | production | https://stopcovid19.metro.tokyo.lg.jp/ | 生成静态网站 HTML 的位置 |
| 正式版预览 HTML | gh-pages | https://stg-covid19-tokyo.netlify.com/ | 生成静态网站 HTML 的位置 |
| OGP 工作用 | deploy / new_ogp | 无 | OGP 更新用 |
