# Sitio web del Grupo de trabajo COVID-19 de Tokio

![](https://github.com/tokyo-metropolitan-gov/covid19/workflows/production%20deploy/badge.svg)

[![Tokyo COVID-19 Task Force website](https://user-images.githubusercontent.com/1301149/75629392-1d19d900-5c25-11ea-843d-2d4376e3a560.png)](https://stopcovid19.metro.tokyo.lg.jp/)

### [日本語](./../../README.md) | [English](./../en/README.md) | Español | [한국어](./../ko/README.md) | [繁體中文](./../zh_TW/README.md) | [简体中文](./../zh_CN/README.md) | [Tiếng Việt](./../vi/README.md) | [ภาษาไทย](./../th/README.md) | [Français](./../fr/README.md) | [Português](./../pt_BR/README.md)


## Cómo Contribuir

Todas las contribuciones son bienvenidas.!
Por favor, consulte [Cómo contribuir](./CONTRIBUTING.md) para obtener más detalles.

## Código de Conducta

Por favor, consulte el [Código de conducta para desarrolladores](./CODE_OF_CONDUCT.md) para más detalles.

## Licencia
Este software se publica bajo la [licencia MIT](./../../LICENSE.txt).

[PLEASE TRANSLATE ME]

Please check [How to translate](./../../TRANSLATION.md) doc.

[/PLEASE TRANSLATE ME]

## Para Desarrolladoras

### Cómo Configurar Entornos

- Versión requerida de Node.js: 10.19.0 o superior

**Use yarn**
```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```


[PLEASE TRANSLATE ME]

**アクセシビリティチェック（vue-axe）を無効にする方法**

- 開発用ローカルサーバが重い場合、以下のようにアクセシビリティチェックを無効にして起動することができます。

```bash
# serve with hot reload at localhost:3000
$ yarn dev-no-axe
```
-no-axe
```

[/PLEASE TRANSLATE ME]


**Use docker**
```bash
# serve with hot reload at localhost:3000
$ docker-compose up --build
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

### Detect production/others environment

On the production environment, `'production'` is assigned to `process.env.GENERATE_ENV` variable, on the other case `'development'` is assigned to the variable.  
Please use the variable to detect which environment is used at the runtime.

[/PLEASE TRANSLATE ME]

### Implementación en entornos de preparación y producción

Cuando se actualiza la rama `master`, los archivos HTML se construirán automáticamente en la rama de `production`,
y luego el sitio de producción (https://stopcovid19.metro.tokyo.lg.jp/) también se actualizará.

Cuando se actualiza la rama `staging`, los archivos HTML se construirán automáticamente en la rama `gh-pages`,
  y luego el sitio de preparación (https://stg-covid19-tokyo.netlify.com/) también se actualizará.

Cuando se actualiza la rama `development`, los archivos HTML se construirán automáticamente en la rama` dev-pages`,
y luego el sitio de desarrollo (https://dev-covid19-tokyo.netlify.com/) también se actualizará.

[PLEASE TRANSLATE ME]

### Branch rules

Pull Request is allowed only for `development` and `dev-hotfix`.
Please use the following naming rules for the branch when sending a Pull Request.

Feature implementation: feature/#{ISSUE_ID}-#{branch_title_name}  
Hotfix commit: hotfix/#{ISSUE_ID}-{branch_title_name}

#### Basic branch
| Purpose | Branch | Confirmation URL | Remarks |
| ---- | -------- | ---- | ---- |
| Development | development | https://dev-covid19-tokyo.netlify.com/ | base branch. Basically send a Pull Request here |
| Hotfix branch | dev-hotfix | None | Fixes that should be applied to production in haste. Use this if requested by the administrator |
| Staging | staging | https://stg-covid19-tokyo.netlify.com/ | For final confirmation before production. Non-admin pull requests are prohibited |
Production | master | https://stopcovid19.metro.tokyo.lg.jp/ | Pull Requests other than Administrators are prohibited |

#### Branch used by the system
| Purpose | Branch | Confirmation URL | Remarks |
| ---- | -------- | ---- | ---- |
| Production site HTML | production | https://stopcovid19.metro.tokyo.lg.jp/ | Location where statically built HTML is located |
| Staging site HTML | gh-pages | https://stg-covid19-tokyo.netlify.com/ | Where to find statically built HTML |
| For OGP working directory | deploy / new_ogp | None | For updating OGP |

[/PLEASE TRANSLATE ME]
