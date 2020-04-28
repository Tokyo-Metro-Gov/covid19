# Aos Tradutores

## 1. Como configurar o ambiente

[PLEASE TRANSLATE ME]

Install the following application to the environment for development.

| Application name | Application version(Fill in only if specified) | Installation conditions |
| ------- | ------- | ------- |
|[Node.js](https://nodejs.org/pt-br/)|10.19.0 ou mais nova|Required|
|[Visual Studio Code](https://code.visualstudio.com/)| |If you use Visual Studio Code|
|[yarn](https://classic.yarnpkg.com/pt-BR/)| |When executing this program with `yarn`|
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

### 2-1. Usando `yarn`

#### 2-1-1. Instala as dependências

```bash
# instala as dependências
$ yarn install
```

[PLEASE TRANSLATE ME]

#### 2-1-2. Run this program

After executing the following command, you can check the program under development by accessing http://localhost:3000 .

##### 2-1-2-1. Normal

[/PLEASE TRANSLATE ME]

```bash
# serve com hot reload em localhost:3000
$ yarn dev
```

##### 2-1-2-2. Como desabilitar o assistente verificador de acessibilidade (vue-axe)

Caso o servidor local de desenvolvimento esteja pesado, você pode desabilitar o assistente verificador de acessibilidade.

```bash
# serve com hot reload em localhost:3000
$ yarn dev-no-axe
```

[PLEASE TRANSLATE ME]

### 2-1-3. Troubleshoot

[/PLEASE TRANSLATE ME]

#### 2-1-3-1. Como resolver o erro `Cannot find module ****`

[PLEASE TRANSLATE ME]

Build the dependency again and run the program.

[/PLEASE TRANSLATE ME]

### 2-2. Usando `docker compose`

#### 2-2-1. Install dependencies and run this program

After executing the following command, you can check the program under development by accessing http://localhost:3000 .

```bash
# serve com hot reload em localhost:3000
$ docker-compose up --build
```

[PLEASE TRANSLATE ME]

### 2-2-2. Troubleshoot

[/PLEASE TRANSLATE ME]

#### 2-2-2-1. Como resolver o erro `Cannot find module ****`

[PLEASE TRANSLATE ME]

Stop the program and execute the following command.

[/PLEASE TRANSLATE ME]

```bash
$ docker-compose run --rm app yarn install
```

### 2-3. Usando `Vagrant`

[PLEASE TRANSLATE ME]

#### 2-3-1. Install dependencies and run this program

After executing the following command, you can check the program under development by accessing http://localhost:3000 .

[/PLEASE TRANSLATE ME]

```bash
# serve com hot reload em localhost:3000
$ vagrant up
```

### 2-4. Quando for desenvolver com Visual Studio Code + Remote Containers

[PLEASE TRANSLATE ME]

#### 2-4-1. Install dependencies and run this program

[/PLEASE TRANSLATE ME]

Se você selecionar “Open Folder in Container” na raíz deste repositório (como visto no canto inferior esquerdo [Quick start: Try a dev container (site externo)](https://code.visualstudio.com/docs/remote/containers#_quick-start-try-a-dev-container)), a construção do ambiente vai começar.

[PLEASE TRANSLATE ME]

You can check the program under development by accessing http://localhost:3000 after building the environment.

[/PLEASE TRANSLATE ME]

#### 2-4-2. Notas

- Se você quiser modificar configurações, altere em `.devcontainer/devcontainer.json`. Confira mais detalhes em [devcontainer.json reference](https://code.visualstudio.com/docs/remote/containers#_devcontainerjson-reference).
- A extensão "ESLint" só é válida quando executando o Remote Container. Por favor, adicione-a a `extensions` do arquivo `.devcontainer/devcontainer.json` se necessário.
- Um procedimento detalhado pode ser encontrado [Managing extensions (site externo)](https://code.visualstudio.com/docs/remote/containers#_managing-extensions).
- Quando for reconstruír o ambiente de desenvolvimento local, por favor execute "Rebuild Container", que se encontra no canto infeior esquerdo.

---

## 3. Detectar ambiente de produção/outros

No ambiente de produção, é dado o valor de `'production'` à variável `process.env.GENERATE_ENV`. Em outros casos, o valor dado à variável é  `'development'`.
Por favor, use esta variável para detectar qual ambiente está sendo usado durante a execução.

---

## 4. Deployment para ambientes Staging e Produção

[PLEASE TRANSLATE ME]

When the branch listed in the left column of the table below is updated, the branch and website will be updated automatically.

| branch | A branch where HTML is built and updated | Website updated |
| ---- | ---- | ---- |
|`master`|`production`|The production site https://stopcovid19.metro.tokyo.lg.jp/|
|`staging`|`gh-pages`|The staging site https://stg-covid19-tokyo.netlify.app/|
|`development`|`dev-pages`|The development site https://dev-covid19-tokyo.netlify.app/|

[/PLEASE TRANSLATE ME]

---

## 5. Regras para branches

Pull Requests são permitidos apenas para as branches `development`.
Por favor, use as seguintes regras para nomeação de branch quando estiver enviando um Pull Request.

[PLEASE TRANSLATE ME]

| Types of changes | Naming rules for the branch |
| ---- | ---- |
|Feature implementation|`feature/#{ISSUE_ID}-#{branch_title_name}`|
|Hotfix commit|`hotfix/#{ISSUE_ID}-#{branch_title_name}`|

[/PLEASE TRANSLATE ME]

### 5-1. Branches principais

[PLEASE TRANSLATE ME]

| Propósito | Branch | URL de Confirmação | People who can make pull requests | | Detalhes |
| ---- | ---- | ---- | ---- | ---- |
| Desenvolvimento | development | https://dev-covid19-tokyo.netlify.app/ | All developers | base branch. Basically send a Pull Request here |
| Hotfix branch | dev-hotfix | Nenhum | Consertos para aplicar diretamente em produção. Utilize se requisitado pelo administrator |
| Staging | staging | https://stg-covid19-tokyo.netlify.app/ | Only administrators | Para confirmação final antes de ir para produção. Pull Requests de não-administratores são proibidos |
| Produção | master | https://stopcovid19.metro.tokyo.lg.jp/ | Only administrators | Pull Requests de não administrator são proibidos |

[/PLEASE TRANSLATE ME]

### 5-2. Branches usadas pelo sistema

| Propósito | Branch | URL de Confirmação | Detalhes |
| ---- | -------- | ---- | ---- |
| HTML do site de Produção | production | https://stopcovid19.metro.tokyo.lg.jp/ | Onde se encontram os HTML estáticos |
| HTML do site de Staging | gh-pages | https://stg-covid19-tokyo.netlify.app/ | Onde se encontram os HTML estáticos |
| Para o diretório de trabalho do OGP | deploy / new_ogp | Nenhum | Para atualizar OGP |
