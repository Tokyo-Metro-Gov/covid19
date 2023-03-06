# 開発者向け情報

## 1. 環境構築

以下のアプリケーション開発をおこなう環境へインストールします。

| アプリケーション名                                                                                                                    | バージョン(指定がある場合のみ、記載する) | インストール条件                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| [Node.js](https://nodejs.org/ja/)                                                                                                     | 18.12.1 以上                             | 必須                                                                                                              |
| [Visual Studio Code](https://code.visualstudio.com/)                                                                                  |                                          | [Visual Studio Code を利用する場合](#1-1-visual-studio-codeの拡張機能)                                            |
| [yarn](https://classic.yarnpkg.com/ja/)                                                                                               |                                          | [本プログラムを yarn で実行する場合](#2-1-yarn-を使う場合)                                                        |
| [docker compose](https://docs.docker.com/compose/install/)                                                                            |                                          | [本プログラムを docker compose で実行する場合](#2-2-docker-compose-を使う場合)                                    |
| [Vagrant](https://www.vagrantup.com/)                                                                                                 |                                          | [本プログラムを Vagrant で実行する場合](#2-3-vagrant-を使う場合)                                                  |
| [Visual Studio Code](https://code.visualstudio.com/) + [Remote Containers](https://code.visualstudio.com/docs/remote/remote-overview) |                                          | [Visual Studio Code + Remote Containers で開発する場合](#2-4-visual-studio-code--remote-containersで開発する場合) |
| [Gitpod](https://www.gitpod.io/)                                                                                                      |                                          | [Gitpod で開発する場合](#2-5-gitpodで開発する場合)                                                                |

### 1-1. Visual Studio Code の拡張機能

Visual Studio Code を利用する場合は、以下の拡張機能をインストールします。

| 拡張機能                                                                                                               | インストール条件                                        |
| ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)                                   | 任意                                                    |
| [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)                                              | 任意                                                    |
| [TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)                | 任意                                                    |
| [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)                | 任意                                                    |
| [Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) | Visual Studio Code で Remote Development を利用する場合 |

---

## 2. 実行

コマンドの実行は、WorkingCopy のルートディレクトリでおこないます。

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
$ docker compose up --build
```

#### 2-2-2. トラブルシュート

##### 2-2-2-1. `Cannot find module ****` と怒られた時

プログラムを止め、以下のコマンドを実行します。

```bash
# serve with hot reload at localhost:3000
$ docker compose run --rm app yarn install
```

### 2-3. `Vagrant` を使う場合

#### 2-3-1. 依存関係を構築し、プログラムを実行する

以下のコマンドを実行した後、 http://localhost:3000 にアクセスすると、開発中のプログラムを確認する事ができます。

```bash
# serve with hot reload at localhost:3000
$ vagrant up
```

### 2-4. Visual Studio Code + Remote Containers で開発する場合

#### 2-4-1. 依存関係を構築し、プログラムを実行する

[Quick start: Try a dev container の画像 (外部サイト)](https://code.visualstudio.com/docs/remote/containers#_quick-start-try-a-dev-container)のように、左下部の「Open Folder in Container」でこのリポジトリのルートを選択すれば、環境構築が始まります。

環境を構築した後に http://localhost:3000 にアクセスすると、開発中のプログラムを確認する事ができます。

#### 2-4-2. Topic

- 設定を変更したい場合は、[devcontainer.json reference (外部サイト)](https://code.visualstudio.com/docs/remote/containers#_devcontainerjson-reference)を参照し、`.devcontainer/devcontainer.json`を変更してください。
- Remote Container 実行時のみ有効な拡張機能「ESLint」を導入していますが、必要に応じて`.devcontainer/devcontainer.json`の`extensions`に追加してください。
  詳細な手順は、[Managing extensions (外部サイト)](https://code.visualstudio.com/docs/remote/containers#_managing-extensions)を参照してください。
- 開発環境を再構築する場合は、左下部の「Rebuild Container」を実行してください。

### 2-5. Gitpod で開発する場合

以下のボタンを押し、GitHub アカウント認証をすると、自動的にリモート開発環境のセットアップが行われます。

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/tokyo-metropolitan-gov/covid19)

無償ユーザーは月 50 時間まで利用できます。

---

## 3. 本番環境/その他の判定

`process.env.GENERATE_ENV` の値が、本番の場合は`'production'`に、それ以外の場合は `'development'` になっています。
テスト環境のみで実行したい処理がある場合は、こちらの値をご利用ください。

---

## 4. ステージング・本番環境への反映

下表の左列に記載されたブランチが更新されると、ブランチと Web サイトの更新が自動的におこなわれます。

| ブランチ      | 更新される Web サイト                                        |
| ------------- | ------------------------------------------------------------ |
| `master`      | 本番サイト https://stopcovid19.metro.tokyo.lg.jp/            |
| `staging`     | ステージングサイト https://stopcovid19-tokyo-staging.web.app |
| `development` | 開発用サイト https://stopcovid19-tokyo-development.web.app/  |

※ (2022-05-23 更新) ホスティングサービスを Netlify から Firebase に変更するのにともなって、Generate された HTML 類がコミットされるブランチ (production, gh-pages, dev-pages) の運用は終了しました。

---

## 5. ブランチルール

development 以外は、Pull Request は禁止です。
Pull Request を送る際のブランチは、以下のネーミングルールに従ったブランチにしてください。

| 種類               | ブランチのネーミングルール                 |
| ------------------ | ------------------------------------------ |
| 機能追加系         | `feature/#{ISSUE_ID}-#{branch_title_name}` |
| ホットフィックス系 | `hotfix/#{ISSUE_ID}-#{branch_title_name}`  |

### 5-1. 基本的なブランチ

| 目的         | ブランチ    | 確認 URL                                       | Pull requests を出せる人 | 備考                                                                             |
| ------------ | ----------- | ---------------------------------------------- | ------------------------ | -------------------------------------------------------------------------------- |
| 開発         | development | https://stopcovid19-tokyo-development.web.app/ | 全開発者                 | base branch。基本は、この`development`ブランチに Pull Request を送ってください。 |
| ステージング | staging     | https://stopcovid19-tokyo-staging.web.app      | 管理者のみ               | 本番前の最終確認用。管理者以外の Pull Request は禁止です。                       |
| 本番         | master      | https://stopcovid19.metro.tokyo.lg.jp/         | 管理者のみ               | 管理者以外の Pull Request は禁止です。                                           |

### 5-2. システムで利用しているブランチ

| 目的       | ブランチ       | 確認 URL | 備考         |
| ---------- | -------------- | -------- | ------------ |
| OGP 作業用 | deploy/new_ogp | なし     | OGP の更新用 |

---

## 6. `data` ディレクトリ以下の JSON データについて

### 6-1. データの構造が変わったとき、またはデータが追加されたときは

次のコマンドで、自動生成しているコード（`libraries/auto_generated` 以下のファイル）を再生成してください。

```bash
$ yarn generate-data-converters
```

また、このとき自動生成された interface の定義が変更されます。必要に応じて各コンポーネントの実装を修正してください。

JSON の構造に変化がなくデータだけ更新された場合は、コマンドを実行する必要はありません。

---

## 7. 依存性の管理

このプロジェクトでは、[Renovate](https://github.com/renovatebot/renovate)によって依存性の更新を管理しています。  
適用されるルールについては、[renovate.json](./.github/renovate.json)を参照してください。

### 7-1. Node.js のバージョンアップ

このプロジェクトでは、Node.js を Renovate の管理対象から除外しています。  
Node.js のバージョンを更新したい場合、次の手順に従ってください。

1. このプロジェクトの現在の Node.js バージョンを確認
2. 現在の Node.js バージョンを示す文字列（例：14.16.x）をすべて新しいバージョン（例：14.16.y）に置換
3. 指定した Node のバージョンを手元の環境にもセットアップしてから yarn.lock を再生成しコミットする

Visual Studio Code などのエディタの検索機能で一括置換するのが簡単でしょう。
