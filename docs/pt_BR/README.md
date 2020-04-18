# Site da Força Tarefa de Tóquio para o COVID-19

![](https://github.com/tokyo-metropolitan-gov/covid19/workflows/production%20deploy/badge.svg)

[![Tokyo COVID-19 Task Force website](https://user-images.githubusercontent.com/1301149/75629392-1d19d900-5c25-11ea-843d-2d4376e3a560.png)](https://stopcovid19.metro.tokyo.lg.jp/)


### [日本語](./../../README.md) | [English](./../en/README.md)  | [Español](./../es/README.md) | [한국어](./../ko/README.md) | [繁體中文](./../zh_TW/README.md) | [简体中文](./../zh_CN/README.md) | [Tiếng Việt](./../vi/README.md) | [ภาษาไทย](./../th/README.md) | [Français](./../fr/README.md) | Português


## Como contribuir

Todas as contribuições são bem-vindas!
Por favor, confira [Como contribuir](./CONTRIBUTING.md) para maiores informações.

## Código de conduta

Por favor, confira o nosso [Código de conduta](./CODE_OF_CONDUCT.md) para maiores informações.

## Licença
Este software é distribuído com a [licença MIT](./../../LICENSE.txt).

## Aos Tradutores

Por favor, confira [Como traduzir](./../../TRANSLATION.md).

## Aos Desenvolvedores

### Como configurar o ambiente

- Requer Node.js versão: 10.19.0 ou mais nova

**Usando yarn**
```bash
# instala as dependências
$ yarn install

# serve com hot reload em localhost:3000
$ yarn dev
```

**Como desabilitar o assistente verificador de acessibilidade (vue-axe)**

- Caso o servidor local de desenvolvimento esteja pesado, você pode desabilitar o assistente verificador de acessibilidade.

```bash
# serve com hot reload em localhost:3000
$ yarn dev-no-axe
```

**Usando docker**
```bash
# serve com hot reload em localhost:3000
$ docker-compose up --build
```

### Como resolver o erro `Cannot find module ****`

**Usando yarn**
```bash
$ yarn install
```

**Usando docker**
```bash
$ docker-compose run --rm app yarn install
```

### Quando for desenvolver com VSCode + Remote Containers

1.	A extensão para VSCode "[Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)" é necessária.
2.	Se você selecionar “Open Folder in Container” na raíz deste repositório (como visto no canto inferior esquerdo [aqui (site externo)](https://code.visualstudio.com/docs/remote/containers#_quick-start-try-a-dev-container)), a construção do ambiente vai começar.

#### Notas
- Se você quiser modificar configurações, altere em `'.devcontainer/devcontainer.json `'. Confira mais detalhes em [devcontainer.json reference](https://code.visualstudio.com/docs/remote/containers#_devcontainerjson-reference).
- A extensão "ESLint" só é válida quando executando o Remote Container. Por favor, adicione-a a `'extensions `' do arquivo `'devcontainer.json `' se necessário.
- Um procedimento detalhado pode ser encontrado [aqui (site externo)(https://code.visualstudio.com/docs/remote/containers#_managing-extensions).
- Quando for reconstruír o ambiente de desenvolvimento local, por favor execute "Rebuild Container", que se encontra no canto infeior esquerdo.

### Detectar ambiente de produção/outros

No ambiente de produção, é dado o valor de `'production'` à variável `process.env.GENERATE_ENV`. Em outros casos, o valor dado à variável é  `'development'`.
Por favor, use esta variável para detectar qual ambiente está sendo usado durante a execução.

### Deployment para ambientes Staging e Produção

Quando a branch `master` é atualizada, os arquivos HTML serão automaticamente criados na branch `production`,
e o site de produção (https://stopcovid19.metro.tokyo.lg.jp/) será então atualizado.

Quando a branch `staging` é atualizada, os arquivos HTML serão automaticamente criados na branch `gh-pages`,
e o site de produção (https://stg-covid19-tokyo.netlify.app/) será então atualizado.

Quando a branch `development` é atualizada, os arquivos HTML serão automaticamente criados na branch `dev-pages`,
e o site de produção (https://dev-covid19-tokyo.netlify.app/) será então atualizado.

### Regras para branches

Pull Requests são permitidos apenas para as branches `development` e `dev-hotfix`.
Por favor, use as seguintes regras para nomeação de branch quando estiver enviando um Pull Request.

Implementando uma funcionalidade: feature/#{ISSUE_ID}-#{título_da_branch}  
Commit de Hotfix: hotfix/#{ISSUE_ID}-{título_da_branch}

#### Branches principais
| Propósito | Branch | URL de Confirmação | Detalhes |
| ---- | -------- | ---- | ---- |
| Desenvolvimento | development | https://dev-covid19-tokyo.netlify.app/ | base branch. Basically send a Pull Request here |
| Hotfix branch | dev-hotfix | Nenhum | Consertos para aplicar diretamente em produção. Utilize se requisitado pelo administrator |
| Staging | staging | https://stg-covid19-tokyo.netlify.app/ | Para confirmação final antes de ir para produção. Pull Requests de não-administratores são proibidos |
| Produção | master | https://stopcovid19.metro.tokyo.lg.jp/ | Pull Requests de não administrator são proibidos |

#### Branches usadas pelo sistema
| Propósito | Branch | URL de Confirmação | Detalhes |
| ---- | -------- | ---- | ---- |
| HTML do site de Produção | production | https://stopcovid19.metro.tokyo.lg.jp/ | Onde se encontram os HTML estáticos |
| HTML do site de Staging | gh-pages | https://stg-covid19-tokyo.netlify.app/ | Onde se encontram os HTML estáticos |
| Para o diretório de trabalho do OGP | deploy / new_ogp | Nenhum | Para atualizar OGP |
