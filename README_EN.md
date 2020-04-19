# Chiba COVID-19 Task Force website

Summary of Sites Launched in Various Regions
https://hackmd.io/9TTyyjchR8ufuMd9z08Rcg?view

Sites in Chiba Prefecture
https://www.pref.chiba.lg.jp/index.html

Make a Task Force website, come on!

### [日本語](./README.md) | English | [Spanish](./README_ES.md)

## How to Contribute

All contributions are welcome!
Please check [How to contribute](./.github/CONTRIBUTING_EN.md) for details.

## Slack Group
Basic information is shared on Civic Tech Zen Chiba's Slack.
Please join us by following the invitation link.

https://join.slack.com/t/civictechzenchiba/shared_invite/zt-dnurg6f9-tta8UTbhd0fP58dFiBzOMQ

## Code of Conduct

Please check [Code of conduct for developers](./.github/CODE_OF_CONDUCT_EN.md) for details.

## License
This software is released under [the MIT License](./LICENSE.txt).

## For Developers

### How to Set Up Environments

- Required Node.js version: 10.19.0 or higher
- We recommend you to use docker-compose as you keep getting eslint errors.
- The development version is done by covid19-chiba development.
- A related tool is [covid19-chiba-tools](https://github.com/civictechzenchiba/covid19-chiba-tools). See also.

**Use yarn**
``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```

**Use docker**
```bash
# serve with hot reload at localhost:3000
$ docker-compose up --build
```

### Deployment to Development & Production Environments

When `development` branch is updated, the HTML files will be automatically built onto `dev-pages` branch,
and then the development site (https://development-civictechzenchiba-covid19.netlify.com/) will be also updated.

When `master` branch is updated, the HTML files will be automatically built onto `production` branch,
and then the production site (https://covid19.civictech.chiba.jp/) will be also updated.

### Branch rules

Pull Request is allowed only for `development`.

#### Basic branch
| Purpose | Branch | Confirmation URL | Remarks |
| ---- | -------- | ---- | ---- |
| Development | development | https://development-civictechzenchiba-covid19.netlify.com/ | base branch. Basically send a Pull Request here |
Production | master | https://stopcovid19.metro.tokyo.lg.jp/ | Pull Requests other than Administrators are prohibited |
