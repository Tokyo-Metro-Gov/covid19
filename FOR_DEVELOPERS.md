# 開発者向け情報

## 1. 環境構築

以下のアプリケーションを開発をおこなう環境へインストールします。

| アプリケーション名 | バージョン(指定がある場合のみ、記載する) | インストール条件 |
| ------- | ------- | ------- |
|[Node.js](https://nodejs.org/ja/)|10.19.0以上|必須|
|[Visual Studio Code](https://code.visualstudio.com/)| |Visual Studio Codeを利用する場合|
|[yarn](https://classic.yarnpkg.com/ja/)| |本プログラムをyarnで実行する場合|
|[docker compose](https://docs.docker.com/compose/install/)| |本プログラムをdocker composeで実行する場合|
|[Vagrant](https://www.vagrantup.com/)| |本プログラムをVagrantで実行する場合|

### 1-1. Visual Studio Codeの拡張機能

Visual Studio Codeを利用する場合は、以下の拡張機能をインストールします。

| 拡張機能 | インストール条件 |
| ------- | ------- |
|[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)|任意|
|[Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)|任意|
|[TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)|任意|
|[Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)|任意|
|[Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)|Visual Studio CodeでRemote Developmentを利用する場合|

---

## 2. 実行

コマンドの実行は、WorkingCopyのルートディレクトリでおこないます。

### 2-1. `yarn` を使う場合

#### 2-1-1. 依存関係を構築する

```bash
# install dependencies
$ yarn install
```

#### 2-1-2. プログラムを実行する

以下のコマンドを実行した後、 http://localhost:3000 にアクセスすると、開発中のプログラムを確認する事ができます。

##### 2-1-2-1. 通常

```bash
# serve with hot reload at localhost:3000
$ yarn dev
```

##### 2-1-2-2. 軽量モード

開発用ローカルサーバが重い場合、以下のようにアクセシビリティチェック(vue-axe)を無効にして、起動できます。

```bash
# serve with hot reload at localhost:3000
$ yarn dev-no-axe
```

#### 2-1-3. トラブルシュート

##### 2-1-3-1. `Cannot find module ****` と怒られた時

再度、依存関係を構築し直し、プログラムを実行します。

### 2-2. `docker compose` を使う場合

#### 2-2-1. 依存関係を構築し、プログラムを実行する

以下のコマンドを実行した後、 http://localhost:3000 にアクセスすると、開発中のプログラムを確認する事ができます。
```bash
# serve with hot reload at localhost:3000
$ docker-compose up --build
```

#### 2-2-2. トラブルシュート

##### 2-2-2-1. `Cannot find module ****` と怒られた時

プログラムを止め、以下のコマンドを実行します。
```bash
# serve with hot reload at localhost:3000
$ docker-compose run --rm app yarn install
```

### 2-3. `Vagrant` を使う場合

#### 2-3-1. 依存関係を構築し、プログラムを実行する

以下のコマンドを実行した後、 http://localhost:3000 にアクセスすると、開発中のプログラムを確認する事ができます。
```bash
# serve with hot reload at localhost:3000
$ vagrant up
```

#### 2-3-2. トラブルシュート

##### 2-3-2-1. `Cannot find module ****` と怒られた時

プログラムを止め、以下のコマンドを実行します。
```bash
# serve with hot reload at localhost:3000
$ docker-compose run --rm app yarn install
```

### 2-4. Visual Studio Code + Remote Containersで開発する場合

#### 2-4-1. 依存関係を構築し、プログラムを実行する

[Quick start: Try a dev containerの画像 (外部サイト)](https://code.visualstudio.com/docs/remote/containers#_quick-start-try-a-dev-container)のように、左下部の「Open Folder in Container」でこのリポジトリのルートを選択すれば、環境構築が始まります。

環境を構築した後に http://localhost:3000 にアクセスすると、開発中のプログラムを確認する事ができます。

#### 2-4-2. Topic

- 設定を変更したい場合は、[devcontainer.json reference (外部サイト)](https://code.visualstudio.com/docs/remote/containers#_devcontainerjson-reference)を参照し、`.devcontainer/devcontainer.json`を変更してください。
- Remote Container実行時のみ有効な拡張機能「ESLint」を導入していますが、必要に応じて`.devcontainer/devcontainer.json`の`extensions`に追加してください。
詳細な手順は、[Managing extensions (外部サイト)](https://code.visualstudio.com/docs/remote/containers#_managing-extensions)を参照してください。
- 開発環境を再構築する場合は、左下部の「Rebuild Container」を実行してください。

---

## 3. 本番環境/その他の判定

`process.env.GENERATE_ENV` の値が、本番の場合は`'production'`に、それ以外の場合は `'development'` になっています。  
テスト環境のみで実行したい処理がある場合は、こちらの値をご利用ください。

---

## 4. ステージング・本番環境への反映

下表の左列に記載されたブランチが更新されると、ブランチとWebサイトの更新が自動的におこなわれます。

| ブランチ | HTML類がbuildされ、更新されるブランチ | 更新されるWebサイト |
| ---- | ---- | ---- |
|`master`|`production`|本番サイト https://stopcovid19.metro.tokyo.lg.jp/|
|`staging`|`gh-pages`|ステージングサイト https://stg-covid19-tokyo.netlify.com/|
|`development`|`dev-pages`|開発用サイト https://dev-covid19-tokyo.netlify.com/|

---

## 5. ブランチルール

development 以外は、Pull Request は禁止です。  
Pull Request を送る際のブランチは、以下のネーミングルールに従ったブランチにしてください。

| 種類 | ブランチのネーミングルール |
| ---- | ---- |
|機能追加系|`feature/#{ISSUE_ID}-#{branch_title_name}`|
|ホットフィックス系|`hotfix/#{ISSUE_ID}-#{branch_title_name}`|

### 5-1. 基本的なブランチ

| 目的 | ブランチ | 確認URL | Pull requestsを出せる人 | 備考 |
| ---- | ---- | ---- | ---- | ---- |
| 開発 | development | https://dev-covid19-tokyo.netlify.com/ | 全開発者 | base branch。基本は、この`development`ブランチに Pull Requestを送ってください。 |
| ステージング | staging | https://stg-covid19-tokyo.netlify.com/ | 管理者のみ | 本番前の最終確認用。管理者以外の Pull Request は禁止です。 |
| 本番 | master | https://stopcovid19.metro.tokyo.lg.jp/ | 管理者のみ | 管理者以外の Pull Request は禁止です。 |

### 5-2. システムで利用しているブランチ

| 目的 | ブランチ | 確認URL | 備考 |
| ---- | -------- | ---- | ---- |
| 本番サイトHTML | production | https://stopcovid19.metro.tokyo.lg.jp/ | 静的ビルドされたHTMLが置いてある場所 |
| ステージングサイト HTML | gh-pages | https://stg-covid19-tokyo.netlify.com/ | 静的ビルドされたHTMLが置いてある場所 |
| OGP作業用 | deploy/new_ogp | なし | OGPの更新用 |
