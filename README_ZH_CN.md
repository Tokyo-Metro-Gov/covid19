# 东京都 新型冠状病毒对策网

![](https://github.com/tokyo-metropolitan-gov/covid19/workflows/production%20deploy/badge.svg)

[![东京都 新型冠状病毒对策网](https://user-images.githubusercontent.com/1301149/75629392-1d19d900-5c25-11ea-843d-2d4376e3a560.png)](https://stopcovid19.metro.tokyo.lg.jp/)

### [日本語](./README.md) | [English](./README_EN.md) | [Spanish](./README_ES.md) | [Korean](./README_KO.md) | [Chinese (Taiwan)](./README_ZH_TW.md) | Chinese (Simplified) | [Vietnamese](./README_VI.md)

## 如何贡献
如果您能对 Issus 中做出各式各样的修改协助，我们将不胜感激。

详细请参照[如何贡献](./.github/CONTRIBUTING_ZH_CN.md)。


## 行动准则
详细请参照[建站行动原则](./.github/CODE_OF_CONDUCT_ZH_CN.md)。

## 授权
本软件采用[MIT授权条款](./LICENSE.txt)。

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

### 发布到 Staging环境以及正式环境的方法

`master` 分支更新時，自动将 `production` 分支中的HTML类(build)后发布到正式版 https://stopcovid19.metro.tokyo.lg.jp/

`staging` 分支更新時，自动将 `gh-pages` 分支中的HTML类(build)后发布到Staging版 https://stg-covid19-tokyo.netlify.com/

`development` 分支更新時，自动将 `dev-pages` 分支中的HTML类(build)后发布到开发版 https://dev-covid19-tokyo.netlify.com/
