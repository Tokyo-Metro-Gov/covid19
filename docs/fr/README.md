# Site web du group de travail Tokyo COVID-19

![](https://github.com/tokyo-metropolitan-gov/covid19/workflows/production%20deploy/badge.svg)

[![Tokyo COVID-19 Task Force website](https://user-images.githubusercontent.com/1301149/75629392-1d19d900-5c25-11ea-843d-2d4376e3a560.png)](https://stopcovid19.metro.tokyo.lg.jp/)


### [日本語](./../../README.md) | [English](./../en/README.md) | [Español](./../es/README.md) | [한국어](./../ko/README.md) | [繁體中文](./../zh_TW/README.md) | [简体中文](./../zh_CN/README.md) | [Tiếng Việt](./../vi/README.md) | [ภาษาไทย](./../th/README.md) | Français


## Comment Contribuer

Toute contribution est bienvenue !
Veuillez checker [Comment contribuer](./CONTRIBUTING.md) pour plus d'informations.

## Code of Conduct

Veuillew checker [Code de conduite des développeurs](./CODE_OF_CONDUCT.md) pour plus d'informations.

## License
Ce logiciel est sous [license MIT](./../../LICENSE.txt).

## Pour les développeurs

### Comment préparer l'environement de développement

- Version de Node.js requise: 10.19.0 or plus récent

**En utilisant yarn**
```bash
# installe les dépendances
$ yarn install

# Sers le site avec hot-reload à l'adresse localhost:3000
$ yarn dev
```

**En utilisant docker**
```bash
# Sers le site avec hot-reload à l'adresse localhost:3000
$ docker-compose up --build
```

### Comment résoudre l'erreur `Cannot find module ****`

**En utilisant yarn**
```bash
$ yarn install
```

**En utilisant docker**
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

### Detecter le type d'environnement

Dans l'environnement de production, la valeur `'production'` est attribuée à la variable `process.env.GENERATE_ENV`, le reste du temps la valeur assignée est `'development'`.  
Veuillez utiliser cette variable pour détecter quel type d'environnement est executé.

### Deployer vers les environnements Staging & Production

Quand la branche `master` est mise-à-jour, les fichiers HTML sont automatiquement construits vers la branche `production`,
et le site production (https://stopcovid19.metro.tokyo.lg.jp/) est aussi mis-à-jour.

Quand la branche `staging` est mise-à-jour, les fichiers HTML sont automatiquement construits vers la branche `gh-pages`,
et le site staging (https://stg-covid19-tokyo.netlify.com/) est aussi mis-à-jour.

Quand la branche `development` est mise-à-jour, les fichiers HTML sont automatiquement construits vers la branche `dev-page`,
et le site development (https://dev-covid19-tokyo.netlify.com/) est aussi mis-à-jour.

### Regles sur les branches

Les Pull Request sont permises seulement sur `development`, et `dev-hotfix`.
Veuillez utiliser le schema suivant pour nommer vos Pull Request:

Nouvelle feature: feature/#{ISSUE_ID}-#{nom_de_la_branche}  
Hotfix: hotfix/#{ISSUE_ID}-{nom_de_la_branche}

#### Branches basiques

| But | Branche | URL | Notes |
| ---- | -------- | ---- | ---- |
| Development | development | https://dev-covid19-tokyo.netlify.com/ | Branche de base. Faites votre Pull Request ici. |
| Hotfix branch | dev-hotfix | None | Fixs qui devraient etre appliques a l'environnement de production rapidement. Utilisez cette branche si demande par l'administrateur. |
| Staging | staging | https://stg-covid19-tokyo.netlify.com/ | Pour confirmation avant production. Pull request d'utilisateurs non-admin sont defendues. |
Production | master | https://stopcovid19.metro.tokyo.lg.jp/ | Pull request d'utilisateurs non-admin sont defendues. |

#### Branches utilisees par le systeme

| But | Branche | URL | Notes |
| ---- | -------- | ---- | ---- |
| Production site HTML | production | https://stopcovid19.metro.tokyo.lg.jp/ | Place ou les pages HTML statiques sont stockees. |
| Staging site HTML | gh-pages | https://stg-covid19-tokyo.netlify.com/ | Ou trouver l'HTML statiquement construit. |
| Dossier de travail OGP | deploy / new_ogp | None | Pour mettre a jour OGP |
