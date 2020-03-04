# 東京都 新型コロナウイルス対策サイト

![](https://github.com/tokyo-metropolitan-gov/covid19/workflows/production%20deploy/badge.svg)

![東京都 新型コロナウイルス対策サイト](https://user-images.githubusercontent.com/1301149/75629392-1d19d900-5c25-11ea-843d-2d4376e3a560.png)


## How to Contribute / 貢献の仕方
Issues にあるいろいろな修正にご協力いただけると嬉しいです。

詳しくは[How to contribute](https://github.com/tokyo-metropolitan-gov/covid19/wiki/How-to-contribute)を御覧ください。

All contributions are welcome!
Please check [How to contribute](https://github.com/tokyo-metropolitan-gov/covid19/wiki/How-to-contribute) for details.

## License / ライセンス
本ソフトウェアは、MITライセンスの元提供されています。
This software is released under the MIT License,

## 開発者向け情報

### 環境構築の手順

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```

### ステージング/本番環境への反映

`master` ブランチがアップデートされると、自動的に `production` ブランチにHTML類がbuildされます。そして、本番サイト https://stopcovid19.metro.tokyo.lg.jp/ が更新されます。

`staging` ブランチがアップデートされると、自動的に `gh-pages` ブランチにHTML類がbuildされます。そして、ステージングサイト https://stg-covid19-tokyo.netlify.com/ が更新されます。

`development` ブランチがアップデートされると、自動的に `dev-pages` ブランチにHTML類がbuildされます。そして、開発用サイト https://dev-covid19-tokyo.netlify.com/ が更新されます。


If `master` branch is updated, the script will build html files to `production` branch.
It will also update the production site https://stopcovid19.metro.tokyo.lg.jp/ .

If `staging` branch is updated, the script will build html files to `gh-pages` branch.
It will also update the staging site https://stg-covid19-tokyo.netlify.com/ .

If `development` branch is updated, the script will build html files to `dev-pages` branch.
It will also update the development site https://dev-covid19-tokyo.netlify.com/ .


