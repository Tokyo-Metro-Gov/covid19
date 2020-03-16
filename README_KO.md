# 도쿄도 코로나19 대책 사이트

![](https://github.com/tokyo-metropolitan-gov/covid19/workflows/production%20deploy/badge.svg)

[![도쿄도 코로나19 대책 사이트](https://user-images.githubusercontent.com/1301149/75629392-1d19d900-5c25-11ea-843d-2d4376e3a560.png)](https://stopcovid19.metro.tokyo.lg.jp/)

### [日本語](./README.md) | [English](./README_EN.md) | [Spanish](./README_ES.md) | [Korean](./README_KO.md) | [Chinese (Taiwan)](./README_ZH_TW.md) | [Chinese (Simplified)](./README_ZH_CN.md) | [Vietnamese](./README_VI.md) | [Thai](./README_TH.md) | [French](./README_FR.md)


## 기여방법
오픈상태의 Issue에 여러 가지 내용 추가 및 수정등으로 기여해주시면, 매우 감사하겠습니다.

자세한 내용은 다음의 [기여방법](./.github/CONTRIBUTING_KO.md) 링크를 참고해주세요.


## 행동강령
자세한 내용은 [사이트 구축 행동강령](./.github/CODE_OF_CONDUCT_KO.md)를 참고해주세요.


## 라이선스
이 소프트웨어는 [MIT 라이선스](./LICENSE.txt)를 따르고 있습니다.

[PLEASE TRANSLATE ME]

Please check [How to translate](./.github/TRANSLATION.md) doc.

[/PLEASE TRANSLATE ME]

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

[PLEASE TRANSLATE ME]
### VSCode + Remote Containersで開発する場合

1. VSCodeの拡張機能「[Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)」を導入します。
2. [この画像（外部サイト）](https://code.visualstudio.com/docs/remote/containers#_quick-start-try-a-dev-container)のように左下部の「Open Folder in Container」でこのリポジトリのルートを選択すれば環境構築が始まります。

#### Topic
- 設定を変更したい場合は、`.devcontainer/devcontainer.json`を修正してください。
詳細は[devcontainer.jsonのリファレンス](https://code.visualstudio.com/docs/remote/containers#_devcontainerjson-reference)を参照してください。
- Remote Container実行時のみ有効な拡張機能「ESLint」を導入していますが、必要に応じて`devcontainer.json`の`extensions`に追加してください。
詳細な手順は[こちら（外部サイト）](https://code.visualstudio.com/docs/remote/containers#_managing-extensions)を参照してください。
- 開発環境を再構築する場合は、左下部の「Rebuild Container」を実行してください。

[/PLEASE TRANSLATE ME]

### 프로덕션/기타 환경 탐지

프로덕션 환경에서, `'production'` 은 `process.env.GENERATE_ENV` 변수에 할당되고, 다른 환경에서는 `'development'`가 변수에 할당됩니다.  
런타임에서 사용할 환경을 감지하려면 이 변수를 사용하십시요.

### 스테이징 환경 및 운영 환경으로 반영 방법

`master` 브랜치가 업데이트되면, 자동적으로  `production` 브랜치의 HTML 파일이 빌드됩니다. 이후, 운영 환경 사이트 https://stopcovid19.metro.tokyo.lg.jp/ 가 갱신됩니다.

`staging` 브랜치가 업데이트되면, 자동적으로  `gh-pages` 브랜치의 HTML 파일이 빌드됩니다. 이후, 스테이징 환경 사이트 https://stg-covid19-tokyo.netlify.com/ 가 갱신됩니다.

`development` 브랜치가 업데이트되면, 자동적으로  `dev-pages` 브랜치의 HTML 파일이 빌드됩니다. 이후, 개발용 사이트 https://dev-covid19-tokyo.netlify.com/ 가 갱신됩니다.


[PLEASE TRANSLATE ME]

### Branch rules

Pull Request is allowed only for `development`, `dev-i18n` and `dev-hotfix`.  
Please use the following naming rules for the branch when sending a Pull Request.

Feature implementation: feature/#{ISSUE_ID}-#{branch_title_name}  
Hotfix commit: hotfix/#{ISSUE_ID}-{branch_title_name}

#### Basic branch
| Purpose | Branch | Confirmation URL | Remarks |
| ---- | -------- | ---- | ---- |
| Development | development | http://dev-covid19-tokyo.netlify.com/ | base branch. Basically send a Pull Request here |
| Hotfix branch | dev-hotfix | None | Fixes that should be applied to production in haste. Use this if requested by the administrator |
| i18n working branch | dev-i18n | https://i18n-covid-tokyo.netlify.com/ | Temporarily used |
| Staging | staging | https://stg-covid19-tokyo.netlify.com/ | For final confirmation before production. Non-admin pull requests are prohibited |
Production | master | http://stopcovid19.metro.tokyo.lg.jp/ | Pull Requests other than Administrators are prohibited |

#### Branch used by the system
| Purpose | Branch | Confirmation URL | Remarks |
| ---- | -------- | ---- | ---- |
| Production site HTML | production | http://stopcovid19.metro.tokyo.lg.jp/ | Location where statically built HTML is located |
| Staging site HTML | gh-pages | https://stg-covid19-tokyo.netlify.com/ | Where to find statically built HTML |
| For OGP working directory | deploy / new_obp | None | For updating OGP |

[/PLEASE TRANSLATE ME]
