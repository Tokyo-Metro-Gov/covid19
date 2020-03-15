# 도쿄도 코로나19 대책 사이트

![](https://github.com/tokyo-metropolitan-gov/covid19/workflows/production%20deploy/badge.svg)

[![도쿄도 코로나19 대책 사이트](https://user-images.githubusercontent.com/1301149/75629392-1d19d900-5c25-11ea-843d-2d4376e3a560.png)](https://stopcovid19.metro.tokyo.lg.jp/)

### [日本語](./README.md) | [English](./README_EN.md) | [Spanish](./README_ES.md) | [Korean](./README_KO.md) | [Chinese (Taiwan)](./README_ZH_TW.md) | [Chinese (Simplified)](./README_ZH_CN.md) | [Vietnamese](./README_VI.md) | [Thai](./README_TH.md)


## 기여방법
오픈상태의 Issue에 여러 가지 내용 추가 및 수정등으로 기여해주시면, 매우 감사하겠습니다.

자세한 내용은 다음의 [기여방법](./.github/CONTRIBUTING_KO.md) 링크를 참고해주세요.


## 행동강령
자세한 내용은 [사이트 구축 행동강령](./.github/CODE_OF_CONDUCT_KO.md)를 참고해주세요.


## 라이선스
이 소프트웨어는 [MIT 라이선스](./LICENSE.txt)를 따르고 있습니다.

## 이 사이트에서 파생된 사이트

해당 [링크(일본어)](./forkedSites.md)를 클릭하여 보십시요.

## 개발자를 위한 개발 정보

### 개발환경을 구축하는 방법

- 필요한 Node.js 버젼: 10.19.0이상

**yarn을 사용할 경우**
```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```

**docker compose를 사용할 경우**
```bash
# serve with hot reload at localhost:3000
$ docker-compose up --build
```

### `Cannot find module ****` 에러를 해결하는 방법

**yarn을 사용할 경우**
```
$ yarn install
```

**docker compose를 사용할 경우**
```bash
$ docker-compose run --rm app yarn install
```

### 프로덕션/기타 환경 탐지

프로덕션 환경에서, `'production'` 은 `process.env.GENERATE_ENV` 변수에 할당되고, 다른 환경에서는 `'development'`가 변수에 할당됩니다.
런타임에서 사용할 환경을 감지하려면 이 변수를 사용하십시요.

### 스테이징 환경 및 운영 환경으로 반영 방법

`master` 브랜치가 업데이트되면, 자동적으로  `production` 브랜치의 HTML 파일이 빌드됩니다. 이후, 운영 환경 사이트 https://stopcovid19.metro.tokyo.lg.jp/ 가 갱신됩니다.

`staging` 브랜치가 업데이트되면, 자동적으로  `gh-pages` 브랜치의 HTML 파일이 빌드됩니다. 이후, 스테이징 환경 사이트 https://stg-covid19-tokyo.netlify.com/ 가 갱신됩니다.

`development` 브랜치가 업데이트되면, 자동적으로  `dev-pages` 브랜치의 HTML 파일이 빌드됩니다. 이후, 개발용 사이트 https://dev-covid19-tokyo.netlify.com/ 가 갱신됩니다.
