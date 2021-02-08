# 開発者向け情報 (RSpecテストの実行)

## 1. 環境構築

以下のアプリケーションを開発をおこなう環境へインストールします。

| アプリケーション名 | バージョン(指定がある場合のみ、記載する) | インストール条件 |
| ------- | ------- | ------- |
|[Ruby](https://www.ruby-lang.org/)|3.0.0以上|`$PATH`を通しておきます|
|[Google Chrome](https://www.google.com/chrome/)| | |
|[ChromeDriver](https://chromedriver.chromium.org/)|Google Chromeとバージョンを揃える|`$PATH`を通しておきます|

ChromeDriverの`$PATH`を通すとは、例えばmacosの場合

- https://chromedriver.chromium.org/ から ダウンロードしたzipファイルをダブルクリックでzip解凍して /usr/local/bin にFinderでコピーする
- ```bash
  curl -O https://chromedriver.storage.googleapis.com/バージョン番号/chromedriver_mac64.zip
  unzip chromedriver_mac64.zip
  mv chromedriver /usr/local/bin/
  # を実行する
  ```
- Homebrew を使っているならば、`brew install --cask chromedriver` を実行する。
- 自分の好きなディレクトリにchromedriverをコピーして、.zshrc や .bashrc で $PATH に追加する

などいろんな方法があります。

macosのGatekeeperでchromedriverの起動が妨げられる場合は

```bash
xattr -d com.apple.quarantine /usr/local/bin/chromedriver 
```

を実行する必要があるかもしれません。

---

## 2. セットアップ

コマンドの実行は、WorkingCopyのルートディレクトリでおこないます。

### 2-1. 関連ライブラリのインストール

依存関係を構築する

```bash
$ bundle install
```

### 2-2. productionコードの生成

```bash
$ yarn run generate:deploy
```

### 2-3. ローカルWebサーバーを起動

```bash
$ yarn start
```

Webサーバーを起動したまま、以下 3. のテストの実行をします。 

---

## 3. テストの実行

### 3-1. RSpecでテストを実行

```bash
# 全部のテストを一つずつ実行
$ bundle exec rspec spec
```

```bash
# 全部のテストを並列に実行 (parallel_rspec)
$ bundle exec parallel_rspec spec
```

```bash
# 特定のファイルだけ一つ実行
$ bundle exec rspec spec/feature/index_h1_spec.rb
```

```bash
# マッチするファイルを並列実行 (parallel_rspec)
$ bundle exec parallel_rspec spec/feature/*h3_spec.rb
```

---

## 4. テストの成功と失敗

### 4-1. テストの成功

```
50 examples, 0 failures
```

のような出力(GREEN)になります。

### 4-2. テストの失敗

```
48 examples, 2 failures
```

のような出力(RED)になります。

テストが失敗した場合は`spec/screenshot`にスクリーンショット画像がPNGで保存されます。

---

## TIPS

- staticにgenerateしたproductionコード(2-2, 2-3)ではなく、`yarn dev`のdevelopmentサーバーに対してもテストできますが、
  Hot Module Replacementが効いて、テスト結果が安定しない場合があります。
- `spec/spec_helper.rb`の`options.add_argument('--headless')`行をコメントアウトして「3.テストの実行」をすると、
  Chromeを自動操縦してテストする様子を、画面に表示することができます。
