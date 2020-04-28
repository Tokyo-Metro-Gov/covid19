# Para Desarrolladoras

## 1. Cómo Configurar Entornos

Install the following application to the environment for development.

| Application name | Application version(Fill in only if specified) | Installation conditions |
| ------- | ------- | ------- |
|[Node.js](https://nodejs.org/es/)|10.19.0 or higher|Required|
|[Visual Studio Code](https://code.visualstudio.com/)| |If you use Visual Studio Code|
|[yarn](https://classic.yarnpkg.com/es-ES/)| |When executing this program with `yarn`|
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

### 2-1. Using `yarn`

#### 2-1-1. Install dependencies

```bash
# install dependencies
$ yarn install
```

#### 2-1-2. Run this program

After executing the following command, you can check the program under development by accessing http://localhost:3000 .

##### 2-1-2-1. Normal

```bash
# serve with hot reload at localhost:3000
$ yarn dev
```

##### 2-1-2-2. Faster

You can disable accessibility auditing, which would make your local server faster.

```bash
# serve with hot reload at localhost:3000
$ yarn dev-no-axe
```

### 2-1-3. Troubleshoot

#### 2-1-3-1. How to resolve `Cannot find module ****` error

Build the dependency again and run the program.

### 2-2. Using `docker compose`

#### 2-2-1. Install dependencies and run this program

After executing the following command, you can check the program under development by accessing http://localhost:3000 .

```bash
# serve with hot reload at localhost:3000
$ docker-compose up --build
```

### 2-2-2. Troubleshoot

#### 2-2-2-1. How to resolve `Cannot find module ****` error

Stop the program and execute the following command.
```bash
$ docker-compose run --rm app yarn install
```

### 2-3. Using `Vagrant`

#### 2-3-1. Install dependencies and run this program

After executing the following command, you can check the program under development by accessing http://localhost:3000 .

```bash
# serve with hot reload at localhost:3000
$ vagrant up
```

### 2-4. When developing with Visual Studio Code and Remote Containers

#### 2-4-1. Install dependencies and run this program

If you select the “Open Folder in Container” root of this repository (as seen in the lower left [Quick start: Try a dev container (external site)](https://code.visualstudio.com/docs/remote/containers#_quick-start-try-a-dev-container)), the environment construction will start.

You can check the program under development by accessing http://localhost:3000 after building the environment.

#### 2-4-2. Notes

- If you want to change the settings, modify `.devcontainer/devcontainer.json`. Please refer to [devcontainer.json reference](https://code.visualstudio.com/docs/remote/containers#_devcontainerjson-reference) for more details.
- The extension "ESLint" is only valid when executing Remote Container. Please add it to the `extensions` of `.devcontainer/devcontainer.json` if necessary.
- A detailed procedure can be found [Managing extensions (external site)](https://code.visualstudio.com/docs/remote/containers#_managing-extensions).
- When rebuilding the development environment, please execute “Rebuild Container” which can be found at the lower left.

---

## 3. Detect production/others environment

On the production environment, `'production'` is assigned to `process.env.GENERATE_ENV` variable, on the other case `'development'` is assigned to the variable.  
Please use the variable to detect which enviroinment is used at the runtime.

[/PLEASE TRANSLATE ME]

---

## 4. Implementación en entornos de preparación y producción

[PLEASE TRANSLATE ME]

When the branch listed in the left column of the table below is updated, the branch and website will be updated automatically.

| branch | A branch where HTML is built and updated | Website updated |
| ---- | ---- | ---- |
|`master`|`production`|The production site https://stopcovid19.metro.tokyo.lg.jp/|
|`staging`|`gh-pages`|The staging site https://stg-covid19-tokyo.netlify.app/|
|`development`|`dev-pages`|The development site https://dev-covid19-tokyo.netlify.app/|

---

## 5. Branch rules

Pull Request is allowed only for `development`.
Please use the following naming rules for the branch when sending a Pull Request.

| Types of changes | Naming rules for the branch |
| ---- | ---- |
|Feature implementation|`feature/#{ISSUE_ID}-#{branch_title_name}`|
|Hotfix commit|`hotfix/#{ISSUE_ID}-#{branch_title_name}`|

### 5-1. Basic branch

| Purpose | Branch | Confirmation URL | People who can make pull requests | Remarks |
| ---- | ---- | ---- | ---- | ---- |
| Development | development | https://dev-covid19-tokyo.netlify.app/ | All developers | base branch. Basically send a Pull Request here |
| Staging | staging | https://stg-covid19-tokyo.netlify.app/ | Only administrators | For final confirmation before production. Non-admin pull requests are prohibited. |
| Production | master | https://stopcovid19.metro.tokyo.lg.jp/ | Only administrators | Pull Requests other than Administrators are prohibited |

### 5-2. Branch used by the system

| Purpose | Branch | Confirmation URL | Remarks |
| ---- | -------- | ---- | ---- |
| Production site HTML | production | https://stopcovid19.metro.tokyo.lg.jp/ | Location where statically built HTML is located |
| Staging site HTML | gh-pages | https://stg-covid19-tokyo.netlify.app/ | Where to find statically built HTML |
| For OGP working directory | deploy / new_ogp | None | For updating OGP |

[/PLEASE TRANSLATE ME]
