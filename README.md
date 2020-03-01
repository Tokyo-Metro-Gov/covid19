# covid19

Covid 19 website

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## Deployment

`master` ブランチがアップデートされると、自動的に `production` ブランチにHTML類がbuildされます。そして、本番サイト https://covid19-tokyo.netlify.com/ が更新されます。

`staging` ブランチがアップデートされると、自動的に `gh-pages` ブランチにHTML類がbuildされます。そして、ステージングサイト https://stg-covid19-tokyo.netlify.com/ が更新されます。


If `master` branch is updated, the script will build html files to `production` branch.
`Netlify` will also update the production site https://covid19-tokyo.netlify.com/ .

If `staging` branch is updated, the script will build html files to `gh-pages` branch.
`Netlify` will also update the staging site https://stg-covid19-tokyo.netlify.com/ .


## Contribution

All contributions are welcome!
Please see our issues.

## License

MIT
