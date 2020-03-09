# 东京都 新型冠状病毒疫情对策网站

![](https://github.com/tokyo-metropolitan-gov/covid19/workflows/production%20deploy/badge.svg)

[![东京都新型冠状病毒疫情对策网站](https://user-images.githubusercontent.com/1301149/75629392-1d19d900-5c25-11ea-843d-2d4376e3a560.png)](https://stopcovid19.metro. tokyo.lg.jp/)

### [日本语](./README.md) | [English](./README_EN.md) | [Spanish](./README_ES.md) | [Korean](./README_KO.md) | [Chinese (Taiwan)](./README_ZH_TW.md)  | Chinese (Simplified)

## 如何贡献
如果您能协助对 Issus 做出各种修正，我们将不胜感激。

详情请阅读[如何贡献](./.github/CONTRIBUTING_ZH_TW.md)。

## 行动原则
详情请阅读[建立网站的行动原则](./.github/CODE_OF_CONDUCT_ZH_TW.md)。

## 许可证
本软件采用[MIT授权条款](./LICENSE.txt)释出。

## 面向开发者的信息

### 构建开发环境

- Node.js 版本最低需求: 10.19.0及以上

**使用 yarn 的步骤**
``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```

**使用 docker compose 的步骤**
```bash
# serve with hot reload at localhost:3000
$ docker-compose up --build
```

### Deploy 到 Staging环境以及正式环境的方法

当 `master` 分支被更新时，HTML 文件将会在 `production` 分支中被构建（Build）出来。紧接着，正式版网站 https://stopcovid19.metro.tokyo.lg.jp/ 会被更新。

当 `staging` 分支被更新时，HTML 文件将会在 `gh-pages` 分支中被构建（Build）出来。紧接着， Staging 版网站 https://stg-covid19-tokyo.netlify.com/ 会被更新。

当 `development` 分支被更新时，HTML 文件将会在 `dev-pages` 分支中被构建（Build）出来。紧接着，开发版网站 https://dev-covid19-tokyo.netlify.com/ 会被更新。
