<template>
  <div class="Worker">
    <page-header :title="$t('ウェブアクセシビリティ試験結果（2021年度）')" />
    <static-card>
      <section class="section">
        <h3 class="section-title">
          {{
            $t(
              'JIS X 8341-3:2016附属書JBに基づく試験結果表示（ウェブページ一式単位）'
            )
          }}
        </h3>
        <dl>
          <dt>{{ $t('表明日') }}</dt>
          <dd>{{ formatDate('2021-09-30') }}</dd>
          <dt>{{ $t('規格の規格番号及び改正年') }}</dt>
          <dd>JIS X 8341-3:2016</dd>
          <dt>{{ $t('満たしている適合レベル及び対応度') }}</dt>
          <dd>
            {{ $t('JIS X 8341-3:2016の適合レベルAAに準拠') }}
            <ul>
              <i18n
                tag="li"
                path="本仕様書における「準拠」という対応度の表記は、情報通信アクセス協議会ウェブアクセシビリティ基盤委員会「{guideline}」で定められた表記による"
              >
                <template #guideline>
                  <app-link
                    to="https://waic.jp/docs/jis2016/compliance-guidelines/202104/"
                  >
                    {{
                      $t(
                        'ウェブコンテンツのJIS X 8341-3:2016 対応度表記ガイドライン – 2021年4月版'
                      )
                    }}
                  </app-link>
                </template>
              </i18n>
            </ul>
          </dd>
          <dt>{{ $t('対象となるウェブページに関する簡潔な説明') }}</dt>
          <i18n
            tag="dd"
            path="東京都新型コロナウイルス感染症対策サイトの「{about}」で示した対象範囲のウェブページ"
          >
            <template #about>
              <app-link :to="localePath('/about')">
                {{ $t('当サイトについて：ウェブアクセシビリティ方針') }}
              </app-link>
            </template>
          </i18n>
          <dt>{{ $t('依存したウェブコンテンツ技術のリスト') }}</dt>
          <dd>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>WAI-ARIA</li>
            </ul>
          </dd>
          <dt>
            {{
              $t(
                '試験対象のウェブページを選択した方法及び選択したウェブページ数'
              )
            }}
          </dt>
          <dd>
            {{
              $t(
                'ウェブページ一式を代表するウェブページを選択する場合：34ページ'
              )
            }}
            <ul>
              <li>
                {{
                  $t(
                    '本サイトは多言語版（日本語・English・简体中文・繁體中文・한국어・やさしい にほんご）を有しているが、構成が同一であるため、本試験では日本語版を試験対象とした'
                  )
                }}
              </li>
            </ul>
          </dd>
          <dt>{{ $t('試験を行ったウェブページのURI') }}</dt>
          <dd>
            <a href="#webpages">{{ $t('試験を行ったウェブページのURI') }}</a>
          </dd>
          <dt>{{ $t('達成基準チェックリスト') }}</dt>
          <dd>
            <a href="#checklist">{{ $t('達成基準チェックリスト') }}</a>
          </dd>
        </dl>
      </section>
      <section id="webpages" class="section">
        <h3 class="section-title">
          {{ $t('試験を行ったウェブページのURI') }}
        </h3>
        <ol>
          <li>https://stopcovid19.metro.tokyo.lg.jp/</li>
          <li>https://stopcovid19.metro.tokyo.lg.jp/monitoring</li>
          <li>https://stopcovid19.metro.tokyo.lg.jp/reference</li>
          <li>https://stopcovid19.metro.tokyo.lg.jp/parent</li>
          <li>https://stopcovid19.metro.tokyo.lg.jp/worker</li>
          <li>https://stopcovid19.metro.tokyo.lg.jp/about</li>
          <li>https://stopcovid19.metro.tokyo.lg.jp/contacts</li>
          <li>https://stopcovid19.metro.tokyo.lg.jp/sitemap</li>
          <li>
            https://stopcovid19.metro.tokyo.lg.jp/cards/infection-medical-care-provision-status
          </li>
          <li>
            https://stopcovid19.metro.tokyo.lg.jp/cards/monitoring-comment
          </li>
          <li>
            https://stopcovid19.metro.tokyo.lg.jp/cards/details-of-confirmed-cases
          </li>
          <li>
            https://stopcovid19.metro.tokyo.lg.jp/cards/number-of-confirmed-cases
          </li>
          <li>
            https://stopcovid19.metro.tokyo.lg.jp/cards/monitoring-items-overview
          </li>
          <li>
            https://stopcovid19.metro.tokyo.lg.jp/cards/monitoring-number-of-confirmed-cases
          </li>
          <li>
            https://stopcovid19.metro.tokyo.lg.jp/cards/number-of-reports-to-consultations-about-fever-in-7119
          </li>
          <li>https://stopcovid19.metro.tokyo.lg.jp/cards/untracked-rate</li>
          <li>https://stopcovid19.metro.tokyo.lg.jp/cards/positive-rate</li>
          <li>
            https://stopcovid19.metro.tokyo.lg.jp/cards/number-of-tokyo-rules-applied
          </li>
          <li>
            https://stopcovid19.metro.tokyo.lg.jp/cards/number-of-hospitalized
          </li>
          <li>
            https://stopcovid19.metro.tokyo.lg.jp/cards/positive-status-severe-case
          </li>
          <li>
            https://stopcovid19.metro.tokyo.lg.jp/cards/attributes-of-confirmed-cases
          </li>
          <li>
            https://stopcovid19.metro.tokyo.lg.jp/cards/number-of-confirmed-cases-by-municipalities
          </li>
          <li>
            https://stopcovid19.metro.tokyo.lg.jp/cards/positive-number-over65
          </li>
          <li>
            https://stopcovid19.metro.tokyo.lg.jp/cards/positive-number-by-developed-date
          </li>
          <li>
            https://stopcovid19.metro.tokyo.lg.jp/cards/positive-number-by-diagnosed-date
          </li>
          <li>
            https://stopcovid19.metro.tokyo.lg.jp/cards/deaths-by-death-date
          </li>
          <li>https://stopcovid19.metro.tokyo.lg.jp/cards/number-of-tested</li>
          <li>https://stopcovid19.metro.tokyo.lg.jp/cards/variant</li>
          <li>https://stopcovid19.metro.tokyo.lg.jp/cards/vaccination</li>
          <li>
            https://stopcovid19.metro.tokyo.lg.jp/cards/number-of-reports-to-covid19-telephone-advisory-center
          </li>
          <li>
            https://stopcovid19.metro.tokyo.lg.jp/cards/monitoring-number-of-reports-to-covid19-consultation-desk
          </li>
          <li>
            https://stopcovid19.metro.tokyo.lg.jp/cards/number-of-reports-to-tokyo-fever-consultation-center
          </li>
          <li>
            https://stopcovid19.metro.tokyo.lg.jp/cards/predicted-number-of-toei-subway-passengers
          </li>
          <li>https://stopcovid19.metro.tokyo.lg.jp/cards/agency</li>
        </ol>
      </section>
      <section id="checklist" class="section">
        <h3 class="section-title">
          {{ $t('達成基準チェックリスト') }}
        </h3>
        <table class="table">
          <thead>
            <tr>
              <th>
                {{ $t('達成基準') }}
              </th>
              <th>
                {{ $t('適合レベル') }}
              </th>
              <th>
                {{ $t('適用') }}
              </th>
              <th>
                {{ $t('結果') }}
              </th>
              <th>
                {{ $t('注記') }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {{ $t('1.1.1 非テキストコンテンツの達成基準') }}
              </td>
              <td>A</td>
              <td>
                {{ $t('適用') }}
              </td>
              <td>
                {{ $t('適合') }}
              </td>
              <td>
                <a href="#supplement-1-1-1">
                  {{ $t('1.1.1 非テキストコンテンツの達成基準の判断の補足') }}
                </a>
              </td>
            </tr>
            <tr>
              <td>
                {{ $t('1.2.1 音声だけ及び映像だけ（収録済み）の達成基準') }}
              </td>
              <td>A</td>
              <td>－</td>
              <td>
                {{ $t('適合') }}
              </td>
              <td>
                {{ $t('動画、音声コンテンツなし') }}
              </td>
            </tr>
            <tr>
              <td>
                {{ $t('1.2.2 キャプション（収録済み）の達成基準') }}
              </td>
              <td>A</td>
              <td>－</td>
              <td>
                {{ $t('適合') }}
              </td>
              <td>
                {{ $t('動画、音声コンテンツなし') }}
              </td>
            </tr>
            <tr>
              <td>
                {{
                  $t(
                    '1.2.3 音声解説又はメディアに対する代替コンテンツ（収録済み）の達成基準'
                  )
                }}
              </td>
              <td>A</td>
              <td>－</td>
              <td>
                {{ $t('適合') }}
              </td>
              <td>
                {{ $t('動画、音声コンテンツなし') }}
              </td>
            </tr>
            <tr>
              <td>
                {{ $t('1.2.4 キャプション（ライブ）の達成基準') }}
              </td>
              <td>AA</td>
              <td>－</td>
              <td>
                {{ $t('適合') }}
              </td>
              <td>
                {{ $t('動画、音声コンテンツなし') }}
              </td>
            </tr>
            <tr>
              <td>
                {{ $t('1.2.5 音声解説（収録済み）の達成基準') }}
              </td>
              <td>AA</td>
              <td>－</td>
              <td>
                {{ $t('適合') }}
              </td>
              <td>
                {{ $t('動画、音声コンテンツなし') }}
              </td>
            </tr>
            <tr>
              <td>
                {{ $t('1.3.1 情報及び関係性の達成基準') }}
              </td>
              <td>A</td>
              <td>
                {{ $t('適用') }}
              </td>
              <td>
                {{ $t('適合') }}
              </td>
              <td>
                <a href="#supplement-1-3-1">
                  {{ $t('1.3.1 情報及び関係性の達成基準の判断の補足') }}
                </a>
              </td>
            </tr>
            <tr>
              <td>
                {{ $t('1.3.2 意味のある順序の達成基準') }}
              </td>
              <td>A</td>
              <td>
                {{ $t('適用') }}
              </td>
              <td>
                {{ $t('適合') }}
              </td>
              <td>
                <a href="#supplement-1-3-2">
                  {{ $t('1.3.2 意味のある順序の達成基準の判断の補足') }}
                </a>
              </td>
            </tr>
            <tr>
              <td>
                {{ $t('1.3.3 感覚的な特徴の達成基準') }}
              </td>
              <td>A</td>
              <td>
                {{ $t('適用') }}
              </td>
              <td>
                {{ $t('適合') }}
              </td>
              <td />
            </tr>
            <tr>
              <td>
                {{ $t('1.4.1 色の使用の達成基準') }}
              </td>
              <td>A</td>
              <td>
                {{ $t('適用') }}
              </td>
              <td>
                {{ $t('適合') }}
              </td>
              <td>
                <a href="#supplement-1-4-1">
                  {{ $t('1.4.1 色の使用の達成基準の判断の補足') }}
                </a>
              </td>
            </tr>
            <tr>
              <td>
                {{ $t('1.4.2 音声の制御の達成基準') }}
              </td>
              <td>A</td>
              <td>－</td>
              <td>
                {{ $t('適合') }}
              </td>
              <td>
                {{ $t('動画、音声コンテンツなし') }}
              </td>
            </tr>
            <tr>
              <td>
                {{ $t('1.4.3 コントラスト（最低限レベル）の達成基準') }}
              </td>
              <td>AA</td>
              <td>
                {{ $t('適用') }}
              </td>
              <td>
                {{ $t('適合') }}
              </td>
              <td />
            </tr>
            <tr>
              <td>
                {{ $t('1.4.4 テキストのサイズ変更の達成基準') }}
              </td>
              <td>AA</td>
              <td>
                {{ $t('適用') }}
              </td>
              <td>
                {{ $t('適合') }}
              </td>
              <td>
                <a href="#supplement-1-4-4">
                  {{ $t('1.4.4 テキストのサイズ変更の達成基準の判断の補足') }}
                </a>
              </td>
            </tr>
            <tr>
              <td>
                {{ $t('1.4.5 文字画像の達成基準') }}
              </td>
              <td>AA</td>
              <td>－</td>
              <td>
                {{ $t('適合') }}
              </td>
              <td>
                {{
                  $t(
                    '文字画像なし（グラフ内のテキストは文字画像の定義に該当しないと判断）'
                  )
                }}
              </td>
            </tr>
            <tr>
              <td>
                {{ $t('2.1.1 キーボードの達成基準') }}
              </td>
              <td>A</td>
              <td>
                {{ $t('適用') }}
              </td>
              <td>
                {{ $t('適合') }}
              </td>
              <td />
            </tr>
            <tr>
              <td>
                {{ $t('2.1.2 キーボードトラップなしの達成基準') }}
              </td>
              <td>A</td>
              <td>
                {{ $t('適用') }}
              </td>
              <td>
                {{ $t('適合') }}
              </td>
              <td />
            </tr>
            <tr>
              <td>
                {{ $t('2.2.1 タイミング調整可能の達成基準') }}
              </td>
              <td>A</td>
              <td>
                {{ $t('適用') }}
              </td>
              <td>
                {{ $t('適合') }}
              </td>
              <td />
            </tr>
            <tr>
              <td>
                {{ $t('2.2.2 一時停止，停止及び非表示の達成基準') }}
              </td>
              <td>A</td>
              <td>
                {{ $t('適用') }}
              </td>
              <td>
                {{ $t('適合') }}
              </td>
              <td />
            </tr>
            <tr>
              <td>
                {{
                  $t(
                    '2.3.1 3回のせん（閃）光，又はしきい（閾）値以下の達成基準'
                  )
                }}
              </td>
              <td>A</td>
              <td>－</td>
              <td>
                {{ $t('適合') }}
              </td>
              <td>
                {{ $t('閃光を発したり明滅したりするコンテンツなし') }}
              </td>
            </tr>
            <tr>
              <td>
                {{ $t('2.4.1 ブロックスキップの達成基準') }}
              </td>
              <td>A</td>
              <td>
                {{ $t('適用') }}
              </td>
              <td>
                {{ $t('適合') }}
              </td>
              <td />
            </tr>
            <tr>
              <td>
                {{ $t('2.4.2 ページタイトルの達成基準') }}
              </td>
              <td>A</td>
              <td>
                {{ $t('適用') }}
              </td>
              <td>
                {{ $t('適合') }}
              </td>
              <td />
            </tr>
            <tr>
              <td>
                {{ $t('2.4.3 フォーカス順序の達成基準') }}
              </td>
              <td>A</td>
              <td>
                {{ $t('適用') }}
              </td>
              <td>
                {{ $t('適合') }}
              </td>
              <td />
            </tr>
            <tr>
              <td>
                {{ $t('2.4.4 リンクの目的（コンテキスト内）の達成基準') }}
              </td>
              <td>A</td>
              <td>
                {{ $t('適用') }}
              </td>
              <td>
                {{ $t('適合') }}
              </td>
              <td />
            </tr>
            <tr>
              <td>
                {{ $t('2.4.5 複数の手段の達成基準') }}
              </td>
              <td>AA</td>
              <td>
                {{ $t('適用') }}
              </td>
              <td>
                {{ $t('適合') }}
              </td>
              <td />
            </tr>
            <tr>
              <td>
                {{ $t('2.4.6 見出し及びラベルの達成基準') }}
              </td>
              <td>AA</td>
              <td>
                {{ $t('適用') }}
              </td>
              <td>
                {{ $t('適合') }}
              </td>
              <td />
            </tr>
            <tr>
              <td>
                {{ $t('2.4.7 フォーカスの可視化の達成基準') }}
              </td>
              <td>AA</td>
              <td>
                {{ $t('適用') }}
              </td>
              <td>
                {{ $t('適合') }}
              </td>
              <td />
            </tr>
            <tr>
              <td>
                {{ $t('3.1.1 ページの言語の達成基準') }}
              </td>
              <td>A</td>
              <td>
                {{ $t('適用') }}
              </td>
              <td>
                {{ $t('適合') }}
              </td>
              <td />
            </tr>
            <tr>
              <td>
                {{ $t('3.1.2 一部分の言語の達成基準') }}
              </td>
              <td>AA</td>
              <td>
                {{ $t('適用') }}
              </td>
              <td>
                {{ $t('適合') }}
              </td>
              <td>
                <a href="#supplement-3-1-2">
                  {{ $t('3.1.2 一部分の言語の達成基準の判断の補足') }}
                </a>
              </td>
            </tr>
            <tr>
              <td>
                {{ $t('3.2.1 フォーカス時の達成基準') }}
              </td>
              <td>A</td>
              <td>
                {{ $t('適用') }}
              </td>
              <td>
                {{ $t('適合') }}
              </td>
              <td />
            </tr>
            <tr>
              <td>
                {{ $t('3.2.2 入力時の達成基準') }}
              </td>
              <td>A</td>
              <td>
                {{ $t('適用') }}
              </td>
              <td>
                {{ $t('適合') }}
              </td>
              <td>
                <a href="#supplement-3-2-2">
                  {{ $t('3.2.2 入力時の達成基準の判断の補足') }}
                </a>
              </td>
            </tr>
            <tr>
              <td>
                {{ $t('3.2.3 一貫したナビゲーションの達成基準') }}
              </td>
              <td>AA</td>
              <td>
                {{ $t('適用') }}
              </td>
              <td>
                {{ $t('適合') }}
              </td>
              <td />
            </tr>
            <tr>
              <td>
                {{ $t('3.2.4 一貫した識別性の達成基準') }}
              </td>
              <td>AA</td>
              <td>
                {{ $t('適用') }}
              </td>
              <td>
                {{ $t('適合') }}
              </td>
              <td />
            </tr>
            <tr>
              <td>
                {{ $t('3.3.1 エラーの特定の達成基準') }}
              </td>
              <td>A</td>
              <td>－</td>
              <td>
                {{ $t('適合') }}
              </td>
              <td>
                {{ $t('入力エラーが発生するコンテンツなし') }}
              </td>
            </tr>
            <tr>
              <td>
                {{ $t('3.3.2 ラベル又は説明の達成基準') }}
              </td>
              <td>A</td>
              <td>
                {{ $t('適用') }}
              </td>
              <td>
                {{ $t('適合') }}
              </td>
              <td />
            </tr>
            <tr>
              <td>
                {{ $t('3.3.3 エラー修正の提案の達成基準') }}
              </td>
              <td>AA</td>
              <td>－</td>
              <td>
                {{ $t('適合') }}
              </td>
              <td>
                {{ $t('入力エラーが発生するコンテンツなし') }}
              </td>
            </tr>
            <tr>
              <td>
                {{ $t('3.3.4 エラー回避（法的，金融及びデータ）の達成基準') }}
              </td>
              <td>AA</td>
              <td>－</td>
              <td>
                {{ $t('適合') }}
              </td>
              <td>
                {{ $t('入力エラーが発生するコンテンツなし') }}
              </td>
            </tr>
            <tr>
              <td>
                {{ $t('4.1.1 構文解析の達成基準') }}
              </td>
              <td>A</td>
              <td>
                {{ $t('適用') }}
              </td>
              <td>
                {{ $t('適合') }}
              </td>
              <td>
                <a href="#supplement-4-1-1">
                  {{ $t('4.1.1 構文解析の達成基準の判断の補足') }}
                </a>
              </td>
            </tr>
            <tr>
              <td>
                {{
                  $t(
                    '4.1.2 名前（name），役割（role）及び値（value）の達成基準'
                  )
                }}
              </td>
              <td>A</td>
              <td>
                {{ $t('適用') }}
              </td>
              <td>
                {{ $t('適合') }}
              </td>
              <td />
            </tr>
          </tbody>
        </table>
      </section>
      <section class="section">
        <h3 class="section-title">
          {{ $t('達成基準ごとの判断の補足') }}
        </h3>
        <section id="supplement-1-1-1" class="sub-section">
          <h4 class="section-title">
            {{ $t('1.1.1 非テキストコンテンツの達成基準') }}
          </h4>
          <ul>
            <i18n
              tag="li"
              path="{sitetop}などで表示されるグラフは後続のデータテーブルで代替できていると判断した"
            >
              <template #sitetop>
                <app-link to="/">
                  {{ $t('都内の最新感染動向') }}
                </app-link>
              </template>
            </i18n>
          </ul>
        </section>
        <section id="supplement-1-3-1" class="sub-section">
          <h4 class="section-title">
            {{ $t('1.3.1 情報及び関係性の達成基準') }}
          </h4>
          <ul>
            <li>
              {{
                $t(
                  '利用状況ごとの体験の一致は念頭に置きつつ、より多くの環境でコンテンツが知覚可能であるかを重視して判断した'
                )
              }}
              <ul>
                <i18n
                  tag="li"
                  path="例えば、{sitetop}などで表示される、スクリーンリーダー利用時は不要な機能（凡例ボタンによるグラフの表示切り替え、注釈の表示と折り畳み）も、音声操作では使うケースがある"
                >
                  <template #sitetop>
                    <app-link to="/">
                      {{ $t('都内の最新感染動向') }}
                    </app-link>
                  </template>
                </i18n>
                <li>
                  {{ $t('このため、aria-hidden等はせずにそのまま残している') }}
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section id="supplement-1-3-2" class="sub-section">
          <h4 class="section-title">
            {{ $t('1.3.2 意味のある順序の達成基準') }}
          </h4>
          <ul>
            <i18n
              tag="li"
              path="{sitetop}などで表示されるグラフに対して「日別／累計」の切り替えを行うと、切り替えボタンより前に存在する件数や人数の数字が変化するが、「意味のある順序」として問題とまでは言えないと判断した{subtext}"
            >
              <template #sitetop>
                <app-link to="/">
                  {{ $t('都内の最新感染動向') }}
                </app-link>
              </template>
              <template #subtext>
                <ul>
                  <li>
                    {{
                      $t(
                        'ただし利用状況問わず（つまり視覚的にもスクリーンリーダー利用時も）数字の変化に気づきにくいため、今後要素順を変更するなどの改善を検討する'
                      )
                    }}
                  </li>
                </ul>
              </template>
            </i18n>
          </ul>
        </section>
        <section id="supplement-1-4-1" class="sub-section">
          <h4 class="section-title">{{ $t('1.4.1 色の使用の達成基準') }}</h4>
          <ul>
            <i18n
              tag="li"
              path="{sitetop}などで表示されるグラフは後続のデータテーブルで代替できていると判断した"
            >
              <template #sitetop>
                <app-link to="/">
                  {{ $t('都内の最新感染動向') }}
                </app-link>
              </template>
            </i18n>
          </ul>
        </section>
        <section id="supplement-1-4-4" class="sub-section">
          <h4 class="section-title">
            {{ $t('1.4.4 テキストのサイズ変更の達成基準') }}
          </h4>
          <ul>
            <li>
              {{
                $t(
                  '以下環境でブラウザによるズームが実施できたたため適合と判断した'
                )
              }}
              <ul>
                <li>macOS Google Chrome</li>
                <li>macOS Firefox</li>
                <li>macOS Safari</li>
                <li>iPhone 11 / iOS Safari</li>
              </ul>
            </li>
          </ul>
        </section>
        <section id="supplement-3-1-2" class="sub-section">
          <h4 class="section-title">
            {{ $t('3.1.2 一部分の言語の達成基準') }}
          </h4>
          <ul>
            <li>
              {{
                $t(
                  '日本語以外のバージョンにおいて、翻訳漏れや二重表示といったバグが原因で複数言語が混ざっている場合があるので修正する予定'
                )
              }}<br />{{
                $t('※日本語版以外は試験対象から外しているため本件は補足情報')
              }}
            </li>
          </ul>
        </section>
        <section id="supplement-3-2-2" class="sub-section">
          <h4 class="section-title">{{ $t('3.2.2 入力時の達成基準') }}</h4>
          <ul>
            <li>
              {{
                $t(
                  '以下は入力時に画面に対する変化が起きるが、これは予測可能な変化であると判断した'
                )
              }}
              <ul>
                <li>
                  {{
                    $t(
                      '全ページ：言語選択のセレクトボックスの値を変更することでページ内容が変化する'
                    )
                  }}
                </li>
                <i18n
                  tag="li"
                  path="「{attributes-of-confirmed-cases}」の表において、表示件数のセレクトボックスの値を変更することで一覧の表示件数が変化する"
                >
                  <template #attributes-of-confirmed-cases>
                    <app-link to="/cards/attributes-of-confirmed-cases">
                      {{ $t('陽性者の属性') }}
                    </app-link>
                  </template>
                </i18n>
              </ul>
            </li>
          </ul>
        </section>
        <section id="supplement-4-1-1" class="sub-section">
          <h4 class="section-title">{{ $t('4.1.1 構文解析の達成基準') }}</h4>
          <ul>
            <li>
              {{ $t('以下を満たしていれば適合と判断した') }}
              <ul>
                <li>
                  {{
                    $t(
                      '開始タグ及び終了タグを仕様に準じて使用していることを確認する'
                    )
                  }}
                </li>
                <li>
                  {{
                    $t(
                      'ウェブページの id 属性値が一意的 (ユニーク) であるようにする'
                    )
                  }}
                </li>
                <li>{{ $t('要素には重複した属性がないようにする') }}</li>
              </ul>
            </li>
            <i18n
              tag="li"
              path="{nu-html-checker}によるバリデーション結果としては、入れ子ルール違反、不要なrole属性など一部の問題は残っているが利用に支障はないと判断した"
            >
              <template #nu-html-checker>
                <app-link to="https://validator.w3.org/nu/">
                  Nu Html Checker
                </app-link>
              </template>
            </i18n>
          </ul>
        </section>
      </section>
    </static-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { MetaInfo } from 'vue-meta'

import AppLink from '@/components/_shared/AppLink.vue'
import PageHeader from '@/components/_shared/PageHeader.vue'
import StaticCard from '@/components/_shared/StaticCard.vue'

export default Vue.extend({
  components: {
    PageHeader,
    StaticCard,
    AppLink,
  },
  head(): MetaInfo {
    return {
      title: this.$t('ウェブアクセシビリティ試験結果（2021年度）') as string,
    }
  },
  methods: {
    formatDate(date: string) {
      return `${this.$d(new Date(date), 'date')}`
    },
  },
})
</script>

<style lang="scss" scoped>
.section {
  margin-bottom: 60px;

  p {
    margin-bottom: 10px;
  }

  li {
    margin-bottom: 8px;
  }

  dd ul,
  li ul {
    margin-top: 8px;
  }
}

.sub-section {
  margin-bottom: 24px;
}

.section-title {
  margin-bottom: 0.8em;
}

.table {
  width: 100%;
  border-collapse: collapse;

  th {
    padding: 1em 0;
    white-space: nowrap;
    min-width: 5em;

    @include font-size(14, true);
  }

  td {
    padding: 1em 16px;

    @include font-size(14);
  }

  @include largerThan($medium) {
    th,
    tr:not(:last-child) {
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: thin solid rgba(0, 0, 0, 0.12);
    }

    tr:last-child {
      border: none;
    }
  }

  @include lessThan($medium) {
    thead {
      display: none;
    }

    tbody {
      tr {
        height: auto;
      }

      tr:not(:last-child) {
        border-bottom: thin solid rgba(0, 0, 0, 0.12);
      }
    }

    td {
      display: block;
    }
  }
}
</style>
