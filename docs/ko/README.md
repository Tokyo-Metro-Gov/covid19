# 도쿄도 코로나19 대책 사이트

![](https://github.com/tokyo-metropolitan-gov/covid19/workflows/production%20deploy/badge.svg)

[![도쿄도 코로나19 대책 사이트](https://user-images.githubusercontent.com/1301149/75629392-1d19d900-5c25-11ea-843d-2d4376e3a560.png)](https://stopcovid19.metro.tokyo.lg.jp/)

### [日本語](./../../README.md) | [English](./../en/README.md) | [Español](./../es/README.md) | 한국어 | [繁體中文](./../zh_TW/README.md) | [简体中文](./../zh_CN/README.md) | [Tiếng Việt](./../vi/README.md) | [ภาษาไทย](./../th/README.md) | [Français](./../fr/README.md)


## 기여방법
오픈상태의 Issue에 여러 가지 내용 추가 및 수정등으로 기여해주시면, 매우 감사하겠습니다.

자세한 내용은 다음의 [기여방법](./CONTRIBUTING.md) 링크를 참고해주세요.


## 행동강령
자세한 내용은 [사이트 구축 행동강령](./CODE_OF_CONDUCT.md)를 참고해주세요.


## 라이선스
이 소프트웨어는 [MIT 라이선스](./../../LICENSE.txt)를 따르고 있습니다.

## 이 사이트에서 파생된 사이트

해당 [링크(일본어)](./../../FORKED_SITES.md)를 클릭하여 보세요.

## 번역에 대한 정보

번역을 하려면, 맨 먼저 다음의 [번역 방법(영어)](./../../TRANSLATION.md) 문서를 확인하시기 바랍니다.

## 개발자를 위한 개발 정보

### 개발환경을 구축하는 방법

- 필요한 Node.js 버젼: 10.19.0 이상

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

### VSCode + Remote Containers에서 개발하는 경우

1. VSCode의 확장 프로그램 "[Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)"을 추가합니다.
2. [안내 화면(외부 사이트)](https://code.visualstudio.com/docs/remote/containers#_quick-start-try-a-dev-container)과 같이 좌측 하단의 "Open Folder in Container"에서 이 저장소의 루트를 선택하면 환경 구축이 시작됩니다.

#### Topic
- 설정을 변경할 경우에는 `.devcontainer/devcontainer.json`을 수정해주세요.
 자세한 내용은 [devcontainer.json의 레퍼런스](https://code.visualstudio.com/docs/remote/containers#_devcontainerjson-reference)를 참조해주세요.
- Remote Container실행시에만 유효한 확장기능 "ESLint"를 도입하고 있습니다만, 필요에 따라서 `devcontainer.json`의 `extensions`에 추가해주세요.
 자세한 순서는 [여기(외부 사이트)](https://code.visualstudio.com/docs/remote/containers#_managing-extensions)를 참조해주세요.
- 개발환경을 재구축할 경우, 좌측 하단부의 "Rebuild Container"를 실행해주세요.

### 프로덕션/기타 환경 감지

프로덕션 환경에서, `'production'` 은 `process.env.GENERATE_ENV` 변수에 할당되고, 다른 환경에서는 `'development'`가 변수에 할당됩니다.  
런타임에서 사용할 환경을 감지하려면 이 변수를 사용하세요.

### 스테이징 환경 및 운영 환경으로 반영 방법

`master` 브랜치가 업데이트되면, 자동적으로  `production` 브랜치의 HTML 파일이 빌드됩니다. 이후, 운영 환경 사이트 https://stopcovid19.metro.tokyo.lg.jp/ 가 갱신됩니다.

`staging` 브랜치가 업데이트되면, 자동적으로  `gh-pages` 브랜치의 HTML 파일이 빌드됩니다. 이후, 스테이징 환경 사이트 https://stg-covid19-tokyo.netlify.com/ 가 갱신됩니다.

`development` 브랜치가 업데이트되면, 자동적으로  `dev-pages` 브랜치의 HTML 파일이 빌드됩니다. 이후, 개발용 사이트 https://dev-covid19-tokyo.netlify.com/ 가 갱신됩니다.

### 브랜치(Branch) 규칙

풀 리퀘스트(Pull Request)는 오직 `development`, `dev-hotfix`에서만 가능합니다.
만약, 풀 리퀘스트(Pull Request)를 전달할 때 다음의 네이밍(naming) 규칙를 따라 사용해주시기 바랍니다.

기능 구현: feature/#{ISSUE_ID}-#{branch_title_name}  
핫픽스(hotfix) 커밋: hotfix/#{ISSUE_ID}-{branch_title_name} 

#### 기본 브랜치(branch)
| 목적 | 브랜치 | 확인 URL | 비고 |
| ---- | -------- | ---- | ---- |
| 개발 | development | https://dev-covid19-tokyo.netlify.com/ | 기본 브랜치(branch). 기본은 여기로 풀 리퀘스트를 전달하세요.|
| 핫픽스(hotfix) 브랜치 | dev-hotfix | 없음 | 급하게 프로덕션(production)에 적용해야하는 수정사항용 브랜치입니다. 관리자가 요청한 경우에 사용하세요. |
| 스테이징(Staging) | staging | https://stg-covid19-tokyo.netlify.com/ | 프로덕션(production) 적용 전에 최종 확인용 브랜치입니다. 관리자가 아닌 풀 리퀘스트(Pull Request)는 금지입니다. |
| 프로덕션(Production) | master | https://stopcovid19.metro.tokyo.lg.jp/ | 관리자 이외의 풀 리퀘스트(Pull Request)는 금지입니다. |

#### 시스템에서 사용하는 브랜치(Branch)
| 목적 | 브랜치 | 확인 URL | 비고 |
| ---- | -------- | ---- | ---- |
| 프로덕션(Production) 사이트 HTML | production | https://stopcovid19.metro.tokyo.lg.jp/ | 정적 빌드된 HTML이 있는 위치|
| 스테이징(Staging) 사이트 HTML | gh-pages | https://stg-covid19-tokyo.netlify.com/ | 정적 빌드된 HTML를 찾을 수 있는 곳 |
| OGP 작업용 디렉토리 | deploy / new_ogp | 없음 | OGP 업데이트용 |
