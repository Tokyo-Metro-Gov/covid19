# Tokyo COVID-19 Task Force website

![](https://github.com/tokyo-metropolitan-gov/covid19/workflows/production%20deploy/badge.svg)

[![Tokyo COVID-19 Task Force website](https://user-images.githubusercontent.com/1301149/75629392-1d19d900-5c25-11ea-843d-2d4376e3a560.png)](https://stopcovid19.metro.tokyo.lg.jp/)


### [日本語](./../../README.md) | English | [Español](./../es/README.md) | [한국어](./../ko/README.md) | [繁體中文](./../zh_TW/README.md) | [简体中文](./../zh_CN/README.md) | [Tiếng Việt](./../vi/README.md) | [ภาษาไทย](./../th/README.md) | [Français](./../fr/README.md) | [Português](./../pt_BR/README.md)


## How to Contribute

All contributions are welcome!
Please check [How to contribute](./CONTRIBUTING.md) for details.

## Code of Conduct

Please check [Code of conduct for developers](./CODE_OF_CONDUCT.md) for details.

## License
This software is released under [the MIT License](./../../LICENSE.txt).

## For Translators

Please check [How to translate](./../../TRANSLATION.md) doc.

## For Developers

### How to Set Up Environments

- Required Node.js version: 10.19.0 or higher

**Use yarn**
```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```


**How to disable accessibility auditing (vue-axe)**
- You can disable accessibility auditing, which would make your local server faster.
```bash
# serve with hot reload at localhost:3000
$ yarn dev-no-axe
```

**Use docker**
```bash
# serve with hot reload at localhost:3000
$ docker-compose up --build
```

### How to resolve `Cannot find module ****` error

**Use yarn**
```bash
$ yarn install
```

**Use docker**
```bash
$ docker-compose run --rm app yarn install
```

### When developing with VSCode + Remote Containers

1.	The VSCode extension "[Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)" is introduced.
2.	If you select the “Open Folder in Container” root of this repository (as seen in the lower left [here（external site）](https://code.visualstudio.com/docs/remote/containers#_quick-start-try-a-dev-container)), the environment construction will start.

#### Notes
- If you want to change the settings, modify `'.devcontainer/devcontainer.json `'. Please refer to [devcontainer.json reference](https://code.visualstudio.com/docs/remote/containers#_devcontainerjson-reference) for more details.
- The extension "ESLint" is only valid when executing Remote Container. Please add it to the `'extensions `' of `'devcontainer.json `' if necessary.
- A detailed procedure can be found [here（external site）] (https://code.visualstudio.com/docs/remote/containers#_managing-extensions).
- When rebuilding the development environment, please execute “Rebuild Container” which can be found at the lower left.

### Detect production/others environment

On the production environment, `'production'` is assigned to `process.env.GENERATE_ENV` variable, on the other case `'development'` is assigned to the variable.  
Please use the variable to detect which enviroinment is used at the runtime.

### Deployment to Staging & Production Environments

When `master` branch is updated, the HTML files will be automatically built onto `production` branch,
and then the production site (https://stopcovid19.metro.tokyo.lg.jp/) will be also updated.

When `staging` branch is updated, the HTML files will be automatically built onto `gh-pages` branch,
and then the staging site (https://stg-covid19-tokyo.netlify.com/) will be also updated.

When `development` branch is updated, the HTML files will be automatically built onto `dev-pages` branch,
and then the development site (https://dev-covid19-tokyo.netlify.com/) will be also updated.

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
