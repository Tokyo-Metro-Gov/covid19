# 东京都 新型冠状病毒对策网

![](https://github.com/tokyo-metropolitan-gov/covid19/workflows/production%20deploy/badge.svg)

[![东京都 新型冠状病毒对策网](https://user-images.githubusercontent.com/1301149/75629392-1d19d900-5c25-11ea-843d-2d4376e3a560.png)](https://stopcovid19.metro.tokyo.lg.jp/)

### [日本語](./README.md) | [English](./README_EN.md) | [Spanish](./README_ES.md) | [Korean](./README_KO.md) | [Chinese (Taiwan)](./README_ZH_TW.md) | [Chinese (Simplified)](./README_ZH_CN.md) | [Vietnamese](./README_VI.md) | [Thai](./README_TH.md) | [French](./README_FR.md)

## 如何贡献
如果您能对 Issus 中做出各式各样的修改协助，我们将不胜感激。

详细请参照[如何贡献](./.github/CONTRIBUTING_ZH_CN.md)。


## 行动准则
详细请参照[建站行动原则](./.github/CODE_OF_CONDUCT_ZH_CN.md)。

## 授权
本软件采用[MIT授权条款](./LICENSE.txt)。

[please translate me]

Please check [How to translate](./.github/TRANSLATION.md) doc.

[/please translate me]

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

### Detect production/others environment (translate me!)

On the production environment, `'production'` is assigned to `process.env.GENERATE_ENV` variable, on the other case `'development'` is assigned to the variable.
Please use the variable to detect which enviroinment is used at the runtime.

### 发布到 Staging环境以及正式环境的方法

`master` 分支更新時，自动将 `production` 分支中的HTML类(build)后发布到正式版 https://stopcovid19.metro.tokyo.lg.jp/

`staging` 分支更新時，自动将 `gh-pages` 分支中的HTML类(build)后发布到Staging版 https://stg-covid19-tokyo.netlify.com/

`development` 分支更新時，自动将 `dev-pages` 分支中的HTML类(build)后发布到开发版 https://dev-covid19-tokyo.netlify.com/

