# 東京都 新型コロナウイルス感染症対策サイト

![](https://github.com/tokyo-metropolitan-gov/covid19/workflows/production%20deploy/badge.svg)

![東京都 新型コロナウイルス感染症対策サイト](https://user-images.githubusercontent.com/1301149/75629392-1d19d900-5c25-11ea-843d-2d4376e3a560.png)


## How to Contribute / 貢献の仕方
Issues にあるいろいろな修正にご協力いただけると嬉しいです。

詳しくは[貢献の仕方](./.github/CONTRIBUTING.md)を御覧ください。

All contributions are welcome!
Please check [How to contribute](./.github/CONTRIBUTING_EN.md) for details.

## Code of Conduct / 行動原則

詳しくは[サイト構築にあたっての行動原則](./.github/CODE_OF_CONDUCT.md)を御覧ください。

Please check [Code of conduct for developers](./.github/CODE_OF_CONDUCT_EN.md) for details.

## License / ライセンス
本ソフトウェアは、MITライセンスの元提供されています。
This software is released under the MIT License.

## For Developers / 開発者向け情報

### How to Set Up Environments / 環境構築の手順

**Use yarn / yarn を使う場合**
``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```

**Use docker / docker compose を使う場合**
```bash
# serve with hot reload at localhost:3000
$ docker-compose up --build
```

### Deployment to Staging & Production Environments / ステージング・本番環境への反映

`master` ブランチがアップデートされると、自動的に `production` ブランチにHTML類がbuildされます。そして、本番サイト https://stopcovid19.metro.tokyo.lg.jp/ が更新されます。

`staging` ブランチがアップデートされると、自動的に `gh-pages` ブランチにHTML類がbuildされます。そして、ステージングサイト https://stg-covid19-tokyo.netlify.com/ が更新されます。

`development` ブランチがアップデートされると、自動的に `dev-pages` ブランチにHTML類がbuildされます。そして、開発用サイト https://dev-covid19-tokyo.netlify.com/ が更新されます。


When `master` branch is updated, the HTML files will be automatically built onto `production` branch,
and then the production site (https://stopcovid19.metro.tokyo.lg.jp/) will be also updated.

When `staging` branch is updated, the HTML files will be automatically built onto `gh-pages` branch,
and then the staging site (https://stg-covid19-tokyo.netlify.com/) will be also updated.

When `development` branch is updated, the HTML files will be automatically built onto `dev-pages` branch,
and then the development site (https://dev-covid19-tokyo.netlify.com/) will be also updated.
