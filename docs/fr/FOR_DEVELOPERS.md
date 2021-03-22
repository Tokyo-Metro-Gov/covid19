# Pour les développeurs

## 1. Comment préparer l'environement de développement

[PLEASE TRANSLATE ME]

Install the following application to the environment for development.

| Application name | Application version(Fill in only if specified) | Installation conditions |
| ------- | ------- | ------- |
|[Node.js](https://nodejs.org/fr/)|14.16.0 or plus récent|Required|
|[Visual Studio Code](https://code.visualstudio.com/)| |If you use Visual Studio Code|
|[yarn](https://classic.yarnpkg.com/fr/)| |When executing this program with `yarn`|
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

### 2-1. En utilisant `yarn`

#### 2-1-1. Installe les dépendances

```bash
# installe les dépendances
$ yarn install
```

[PLEASE TRANSLATE ME]

#### 2-1-2. Run this program

After executing the following command, you can check the program under development by accessing http://localhost:3000 .

##### 2-1-2-1. Normal

[/PLEASE TRANSLATE ME]

```bash
# Sers le site avec hot-reload à l'adresse localhost:3000
$ yarn dev
```

[PLEASE TRANSLATE ME]

##### 2-1-2-2. Faster

You can disable accessibility auditing, which would make your local server faster.

```bash
# serve with hot reload at localhost:3000
$ yarn dev-no-axe
```

### 2-1-3. Troubleshoot

[/PLEASE TRANSLATE ME]

#### 2-1-3-1. Comment résoudre l'erreur `Cannot find module ****`

[PLEASE TRANSLATE ME]

Build the dependency again and run the program.

[/PLEASE TRANSLATE ME]

### 2-2. En utilisant `docker compose`

[PLEASE TRANSLATE ME]

#### 2-2-1. Install dependencies and run this program

After executing the following command, you can check the program under development by accessing http://localhost:3000 .

[/PLEASE TRANSLATE ME]

```bash
# Sers le site avec hot-reload à l'adresse localhost:3000
$ docker-compose up --build
```

[PLEASE TRANSLATE ME]

### 2-2-2. Troubleshoot

[/PLEASE TRANSLATE ME]

#### 2-2-2-1. Comment résoudre l'erreur `Cannot find module ****`

[PLEASE TRANSLATE ME]

Stop the program and execute the following command.

[/PLEASE TRANSLATE ME]

```bash
$ docker-compose run --rm app yarn install
```

### 2-3. En utilisant `Vagrant`

[PLEASE TRANSLATE ME]

#### 2-3-1. Install dependencies and run this program

After executing the following command, you can check the program under development by accessing http://localhost:3000 .

[/PLEASE TRANSLATE ME]

```bash
# Sers le site avec hot-reload à l'adresse localhost:3000
$ vagrant up
```

[PLEASE TRANSLATE ME]

### 2-4. When developing with Visual Studio Code and Remote Containers

#### 2-4-1. Install dependencies and run this program

If you select the “Open Folder in Container” root of this repository (as seen in the lower left [Quick start: Try a dev container (external site)](https://code.visualstudio.com/docs/remote/containers#_quick-start-try-a-dev-container)), the environment construction will start.

You can check the program under development by accessing http://localhost:3000 after building the environment.

#### 2-4-2. Notes

- If you want to change the settings, modify `.devcontainer/devcontainer.json`. Please refer to [devcontainer.json reference](https://code.visualstudio.com/docs/remote/containers#_devcontainerjson-reference) for more details.
- The extension "ESLint" is only valid when executing Remote Container. Please add it to the `extensions` of `.devcontainer/devcontainer.json` if necessary.
- A detailed procedure can be found [Managing extensions (external site)](https://code.visualstudio.com/docs/remote/containers#_managing-extensions).
- When rebuilding the development environment, please execute “Rebuild Container” which can be found at the lower left.

[/PLEASE TRANSLATE ME]

---

## 3. Detecter le type d'environnement

Dans l'environnement de production, la valeur `'production'` est attribuée à la variable `process.env.GENERATE_ENV`, le reste du temps la valeur assignée est `'development'`.  
Veuillez utiliser cette variable pour détecter quel type d'environnement est executé.

---

## 4. Deployer vers les environnements Staging & Production

[PLEASE TRANSLATE ME]

When the branch listed in the left column of the table below is updated, the branch and website will be updated automatically.

| branch | A branch where HTML is built and updated | Website updated |
| ---- | ---- | ---- |
|`master`|`production`|The production site https://stopcovid19.metro.tokyo.lg.jp/|
|`staging`|`gh-pages`|The staging site https://stg-covid19-tokyo.netlify.app/|
|`development`|`dev-pages`|The development site https://dev-covid19-tokyo.netlify.app/|

[/PLEASE TRANSLATE ME]

---

## 5. Regles sur les branches

Les Pull Request sont permises seulement sur `development`.
Veuillez utiliser le schema suivant pour nommer vos Pull Request.

[PLEASE TRANSLATE ME]

| Types of changes | Naming rules for the branch |
| ---- | ---- |
|Nouvelle feature|`feature/#{ISSUE_ID}-#{branch_title_name}`|
|Hotfix|`hotfix/#{ISSUE_ID}-#{branch_title_name}`|

[/PLEASE TRANSLATE ME]

### 5-1. Branches basiques

| But | Branche | URL | People who can make pull requests | Notes |
| ---- | ---- | ---- | ---- | ---- |
| Development | development | https://dev-covid19-tokyo.netlify.app/ | All developers | Branche de base. Faites votre Pull Request ici. |
| Staging | staging | https://stg-covid19-tokyo.netlify.app/ | Only administrators | Pour confirmation avant production. Pull request d'utilisateurs non-admin sont defendues. |
| Production | master | https://stopcovid19.metro.tokyo.lg.jp/ | Only administrators | Pull request d'utilisateurs non-admin sont defendues. |

[/PLEASE TRANSLATE ME]

### 5-2. Branches utilisees par le systeme

| But | Branche | URL | Notes |
| ---- | -------- | ---- | ---- |
| Production site HTML | production | https://stopcovid19.metro.tokyo.lg.jp/ | Place ou les pages HTML statiques sont stockees. |
| Staging site HTML | gh-pages | https://stg-covid19-tokyo.netlify.app/ | Ou trouver l'HTML statiquement construit. |
| Dossier de travail OGP | deploy / new_ogp | None | Pour mettre a jour OGP |
