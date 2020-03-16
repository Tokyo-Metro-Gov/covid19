# Cổng thông tin chống dịch CoVid-19 của TP Tokyo

![](https://github.com/tokyo-metropolitan-gov/covid19/workflows/production%20deploy/badge.svg)

[![Cổng thông tin chống dịch CoVid-19 của TP Tokyo](https://user-images.githubusercontent.com/1301149/75629392-1d19d900-5c25-11ea-843d-2d4376e3a560.png)](https://stopcovid19.metro.tokyo.lg.jp/)

### [日本語](./README.md) | [English](./README_EN.md) | [Spanish](./README_ES.md) | [Korean](./README_KO.md) | [Chinese (Taiwan)](./README_ZH_TW.md) | [Chinese (Simplified)](./README_ZH_CN.md) | [Vietnamese](./README_VI.md) | [Thai](./README_TH.md)

## Làm thế nào để đóng góp
Mọi đóng góp của các bạn đều được chào đón.
Xin vui lòng đọc [tại đây](./.github/CONTRIBUTING_VI.md) để biết thêm chi tiết.


## Quy tắc ứng xử
Chi tiết vui lòng xem [tại đây](./.github/CODE_OF_CONDUCT_VI.md)

## Giấy phép
Phần mềm này được phân phối dưới giấy phép [MIT](./LICENSE.txt)

## Thông tin cho nhà phát triển

### Xây dựng môi trường

- Node.js phiên bản: 10.19.0 hoặc cao hơn

**Nếu dùng yarn**
```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```

**Nếu dùng docker compose**
```bash
# serve with hot reload at localhost:3000
$ docker-compose up --build
```

[please translate me]
### VSCode + Remote Cotainersで開発する場合

1. VSCodeの拡張機能「[Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)」を導入します。
2. [この画像（外部サイト）](https://code.visualstudio.com/docs/remote/containers#_quick-start-try-a-dev-container)のように左下部の「Open Folder in Container」でこのリポジトリのルートを選択すれば環境構築が始まります。

[Topic]
- 設定を変更したい場合は、`.devcontainer/devcontainer.json`を修正してください。<br/>
    詳細は[devcontainer.jsonのリファレンス](https://code.visualstudio.com/docs/remote/containers#_devcontainerjson-reference)を参照してください。
- Remote Container実行時のみ有効な拡張機能「ESlint」を導入していますが、必要に応じて`devcontainer.json`の`extensions`に追加してください。<br/>
    詳細な手順は[こちら（外部サイト）](https://code.visualstudio.com/docs/remote/containers#_managing-extensions)を参照してください。
- 開発環境を再構築する場合は、左下部の「Rebuild Container」を実行してください。
[/please translate me]

### Detect procition/others environment (translate me!)

On the production environment, `'production'` is assigned to `process.env.GENERATE_ENV` variable, on the other case `'development'` is assigned to the variable.
Please use the variable to detect which enviroinment is used at the runtime.

### Triển khai lên môi trường staging và production

Khi nhánh `master` được cập nhật, file HTML sẽ tự động được build dựa trên nhánh `production`. Sau đó https://stopcovid19.metro.tokyo.lg.jp/ sẽ được cập nhật.

Khi nhánh `staging` được cập nhật, file HTML sẽ tự động được build dựa trên nhánh `gh-pages`. Sau đó https://stg-covid19-tokyo.netlify.com/ sẽ được cập nhật.

Khi nhánh `development` được cập nhật, file HTML sẽ tự động được build dựa trên nhánh `dev-pages`. Sau đó https://dev-covid19-tokyo.netlify.com/ sẽ được cập nhật.
