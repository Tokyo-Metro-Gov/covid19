# 개발자를 위한 개발 정보

## 1. 개발환경을 구축하는 방법

[PLEASE TRANSLATE ME]

Install the following application to the environment for development.

| Application name | Application version(Fill in only if specified) | Installation conditions |
| ------- | ------- | ------- |
|[Node.js](https://nodejs.org/en/)|10.19.0 이상|Required|
|[Visual Studio Code](https://code.visualstudio.com/)| |If you use Visual Studio Code|
|[yarn](https://classic.yarnpkg.com/en/)| |When executing this program with `yarn`|
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

### 2-1. `yarn` 을 사용할 경우

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

##### 2-1-2-2. 접근성 평가(vue-axe)를 비활성화하는 방법

개발용 로컬 서버가 무거울 때, 다음과 같이 접근성 평가를 비활성화한 후 실행할 수 있습니다.

```bash
# serve with hot reload at localhost:3000
$ yarn dev-no-axe
```

[PLEASE TRANSLATE ME]

### 2-1-3. Troubleshoot

[/PLEASE TRANSLATE ME]

#### 2-1-3-1. `Cannot find module ****` 에러를 해결하는 방법

[PLEASE TRANSLATE ME]

Build the dependency again and run the program.

[/PLEASE TRANSLATE ME]

### 2-2. `docker compose` 을 사용할 경우

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

#### 2-2-2-1. `Cannot find module ****` 에러를 해결하는 방법

[PLEASE TRANSLATE ME]

Stop the program and execute the following command.

[/PLEASE TRANSLATE ME]
```bash
$ docker-compose run --rm app yarn install
```

### 2-3. `Vagrant` 을 사용할 경우

[PLEASE TRANSLATE ME]

#### 2-3-1. Install dependencies and run this program

After executing the following command, you can check the program under development by accessing http://localhost:3000 .

[/PLEASE TRANSLATE ME]

```bash
# serve with hot reload at localhost:3000
$ vagrant up
```

### 2-4. Visual Studio Code and Remote Containers에서 개발하는 경우

[PLEASE TRANSLATE ME]

#### 2-4-1. Install dependencies and run this program

[/PLEASE TRANSLATE ME]

[Quick start: Try a dev container (외부 사이트)](https://code.visualstudio.com/docs/remote/containers#_quick-start-try-a-dev-container)과 같이 좌측 하단의 "Open Folder in Container"에서 이 저장소의 루트를 선택하면 환경 구축이 시작됩니다.

[PLEASE TRANSLATE ME]

You can check the program under development by accessing http://localhost:3000 after building the environment.

[/PLEASE TRANSLATE ME]

#### 2-4-2. Topic

- 설정을 변경할 경우에는 `.devcontainer/devcontainer.json`을 수정해주세요.
 자세한 내용은 [devcontainer.json의 레퍼런스](https://code.visualstudio.com/docs/remote/containers#_devcontainerjson-reference)를 참조해주세요.
- Remote Container실행시에만 유효한 확장기능 "ESLint"를 도입하고 있습니다만, 필요에 따라서 `.devcontainer/devcontainer.json`의 `extensions`에 추가해주세요. for more details.
- 자세한 순서는 [Managing extensions (외부 사이트)](https://code.visualstudio.com/docs/remote/containers#_managing-extensions)를 참조해주세요.
- 개발환경을 재구축할 경우, 좌측 하단부의 "Rebuild Container"를 실행해주세요.

---

## 3. 프로덕션/기타 환경 감지

프로덕션 환경에서, `'production'` 은 `process.env.GENERATE_ENV` 변수에 할당되고, 다른 환경에서는 `'development'`가 변수에 할당됩니다.  
런타임에서 사용할 환경을 감지하려면 이 변수를 사용하세요.

---

## 4. 스테이징 환경 및 운영 환경으로 반영 방법

[PLEASE TRANSLATE ME]

When the branch listed in the left column of the table below is updated, the branch and website will be updated automatically.

| branch | A branch where HTML is built and updated | Website updated |
| ---- | ---- | ---- |
|`master`|`production`|The production site https://stopcovid19.metro.tokyo.lg.jp/|
|`staging`|`gh-pages`|The staging site https://stg-covid19-tokyo.netlify.app/|
|`development`|`dev-pages`|The development site https://dev-covid19-tokyo.netlify.app/|

[/PLEASE TRANSLATE ME]

---

## 5. Branch rules

풀 리퀘스트(Pull Request)는 오직 `development` 에서만 가능합니다.
만약, 풀 리퀘스트(Pull Request)를 전달할 때 다음의 네이밍(naming) 규칙를 따라 사용해주시기 바랍니다.

[PLEASE TRANSLATE ME]

| Types of changes | Naming rules for the branch |
| ---- | ---- |
|기능 구현|`feature/#{ISSUE_ID}-#{branch_title_name}`|
|핫픽스(hotfix) 커밋|`hotfix/#{ISSUE_ID}-#{branch_title_name}`|

[/PLEASE TRANSLATE ME]

### 5-1. 기본 브랜치(branch)

[PLEASE TRANSLATE ME]

| 목적 | 브랜치 | 확인 URL | People who can make pull requests | 비고 |
| ---- | ---- | ---- | ---- | ---- |
| 개발 | development | https://dev-covid19-tokyo.netlify.app/ | All developers | 기본 브랜치(branch). 기본은 여기로 풀 리퀘스트를 전달하세요.|
| 스테이징(Staging) | staging | https://stg-covid19-tokyo.netlify.app/ | Only administrators | 프로덕션(production) 적용 전에 최종 확인용 브랜치입니다. 관리자가 아닌 풀 리퀘스트(Pull Request)는 금지입니다. |
| 프로덕션(Production) | master | https://stopcovid19.metro.tokyo.lg.jp/ | Only administrators | 관리자 이외의 풀 리퀘스트(Pull Request)는 금지입니다. |

[/PLEASE TRANSLATE ME]

### 5-2. 시스템에서 사용하는 브랜치(Branch)

| 목적 | 브랜치 | 확인 URL | 비고 |
| ---- | -------- | ---- | ---- |
| 프로덕션(Production) 사이트 HTML | production | https://stopcovid19.metro.tokyo.lg.jp/ | 정적 빌드된 HTML이 있는 위치|
| 스테이징(Staging) 사이트 HTML | gh-pages | https://stg-covid19-tokyo.netlify.app/ | 정적 빌드된 HTML를 찾을 수 있는 곳 |
| OGP 작업용 디렉토리 | deploy / new_ogp | 없음 | OGP 업데이트용 |
