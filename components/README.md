# components ディレクトリについて

## ディレクトリ構成

### `components/index`

`pages/index.vue` で直接 import されていて，`pages/index.vue` のみで用いられている component を配置している．

* `components/index/SiteTopUpper.vue` - [トップページ](https://stopcovid19.metro.tokyo.lg.jp/) の上部（タブより上）を表示するための component
* `components/index/CardsMonitoring.vue` - 「モニタリング項目」のタブに表示される card をまとめている component
* `components/index/CardsReference.vue` - 「その他 参考指標」のタブに表示される card をまとめている component
* `components/index/CardRow.vue` - 複数のグラフを1行に並べて表示させるための component

#### `components/index/SiteTopUpper`

`components/index/SiteTopUpper.vue` で直接 import されていて，`components/index/SiteTopUpper.vue` のみで用いられている component を配置している．

* `components/index/SiteTopUpper` 直下のファイルの名称は `XxxxCard.vue` で統一している．
* さらに下層のファイルは，ディレクトリ名との重複する部分を取り除き，冗長な命名にならないようにした
  * 例: `components/MonitoringCommentFrame.vue` -> `components/index/SiteTopUpper/MonitoringComment/Frame.vue`）．

#### `components/index/CardsMonitoring`

`components/index/CardsMonitoring.vue` で直接 import されていて，`components/index/CardsMonitoring.vue` のみで用いられている component を配置している．

* `components/index/CardsMonitoring` 直下のファイルの名称は `XxxxCard.vue` で統一している．
* さらに下層のファイルは `Xxxx/Yyyy.vue` という名称で統一している．
  * グラフに関する component のファイル名は，`Chart.vue` で統一している．（各ファイルの内容，仕様については「グラフ・表の component」の項目を参照）

#### `components/index/CardsReference`

`components/index/CardsReference.vue` で直接 import されていて，`components/index/CardsReference.vue` のみで用いられている component を配置している．

* `components/index/CardsReference` 直下のファイルの名称は `XxxxCard.vue` で統一している．
* さらに下層のファイルは `Xxxx/Yyyy.vue` という名称で統一している．
  * `YyyyChart.vue` の形式のファイル名は，グラフの形状に合わせて適切に命名している．

#### `components/index/_shared`

[トップページ](https://stopcovid19.metro.tokyo.lg.jp/) の複数箇所で用いられている component を配置している．

* `DataView.vue` - 各 card component の表示のベースとなる component
  * **TODO**: `XxxxCard.vue` 内で import されているケースと `Xxxx/Chart.vuew` 内で import されているケースがあるのでリファクタする．

##### `components/index/_shared/charts`

* `MixedChart.vue` - 以下の component で import されて，グラフの描画に用いられている．
  * `components/index/CardsMonitoring/ConsultationAboutFeverNumberCard.vue`（モニタリング項目(2) #7119における発熱等相談件数）
  * `components/index/CardsMonitoring/TokyoRulesApplicationNumberCard.vue`（モニタリング項目(5) 救急医療の東京ルールの適用件数）
* `BarChart.vue` - 以下の component で import されて，グラフの描画に用いられている．
  * `components/index/CardsMonitoring/ConfirmedCasesNumberCard.vue`（報告日別による陽性者数の推移）
  * `components/index/CardsReference/PositiveNumberByDevelopedDateCard.vue`（発症日別による陽性者数の推移）
  * `components/index/CardsReference/PositiveNumberByDiagnosedDateCard.vue`（確定日別による陽性者数の推移）
  * `components/index/CardsReference/TelephoneAdvisoryReportsNumberCard.vue`（新型コロナコールセンター相談件数）

##### `components/index/_shared/charts/_base`

* `components/index/_shared/charts/_base/DataSelector.vue` - グラフ表示の「日別/累計」の切り替えに用いる component
* `components/index/_shared/charts/_base/ScrollableChart.vue` - 横スクロールできるグラフの表示に用いる component

##### `components/index/_shared/DataView`

`components/index/_shared/DataView.vue` に関連して用いられるファイル群を配置している．

**注意**: 旧 `components/DataViewCustomInfoPanel.vue` は「発症日別による陽性者数の推移」の描画のみに用いられているため，`components/index/CardsReference/PositiveNumberByDevelopedDate` 以下に配置した．

**TODO**: component が `components/index/_shared/DataView.vue` 以外から import されていることがあるが，そうならないように構造を変更する．

### `components/flow`

`pages/flow.vue` で直接 import されていて，`pages/flow.vue` のみで用いられている component を配置している．

### `components/_shared`

複数のページで共通して使用されている component を配置している．

`components/_shared/SideNavigation` 以下には，`components/_shared/SideNavigation.vue` のみで用いられている component を配置している．

## グラフ・表の component

参考として，[#5327](https://github.com/tokyo-metropolitan-gov/covid19/pull/5327) 以前のファイル名を付記する．

### モニタリング項目

#### 検査陽性者の状況

`components/index/CardsMonitoring/ConfirmedCasesDetails/StackedTable.vue`（旧: `components/ConfirmedCasesDetailsTable.vue`）

数値を縦に積み上げて表示するテーブル

#### 報告日別による陽性者数の推移

（共通コンポーネント）`components/index/_shared/charts/BarChart.vue`（旧: `components/TimeBarChart.vue`）

* 「報告日別による陽性者数」の推移を時系列に並べた棒グラフ
* 「発症日別による陽性者数の推移はこちら」へのリンクあり
* 「日別/累計」の切り替え可能
* 「テーブルを表示」あり

#### モニタリング項目

* `components/index/CardsMonitoring/MonitoringItemsOverview/InfectionStatus.vue`（旧: `components/MonitoringItemsOverviewTableInfectionStatus.vue`）
* `components/index/CardsMonitoring/MonitoringItemsOverview/MedicalSystem.vue`（旧: `components/MonitoringItemsOverviewTableMedicalSystem.vue`）

数値を縦に積み上げて表示するテーブル（2つ）

#### モニタリング項目(1)新規陽性者数

`components/index/CardsMonitoring/MonitoringConfirmedCasesNumber/Chart.vue`（旧: `components/MonitoringConfirmedCasesChart.vue`）

* 「陽性者数」の棒グラフと「７日間移動平均」の折れ線グラフの複合グラフ
* 「テーブルを表示」あり

#### モニタリング項目(2)#7119における発熱等相談件数

（共通コンポーネント）`components/index/_shared/charts/MixedChart.vue`（旧: `components/MixedBarAndLineChart.vue`）

* 「相談件数」の棒グラフと「７日間移動平均」の折れ線グラフの複合グラフ
* 「テーブルを表示」あり

#### モニタリング項目(3)新規陽性者における接触歴等不明者数

`components/index/CardsMonitoring/UntrackedRate/Chart.vue`（旧: `components/UntrackedRateMixedChart.vue`）

* 「接触歴等判明者数」「接触歴等不明者数」の棒グラフと「接触歴等不明者数（７日間移動平均）」「増加比」の折れ線グラフの複合グラフ
* ヘッダーに「増加比」を表示
* 「テーブルを表示」あり

#### モニタリング項目(4)検査の陽性率

`components/index/CardsMonitoring/PositiveRate/Chart.vue`（旧: `components/PositiveRateMixedChart.vue`）

* 「PCR検査陽性者数」「抗原検査陽性者数」「PCR検査陰性者数」「抗原検査陰性者数」の棒グラフと「検査人数（７日間移動平均）」「陽性率」の折れ線グラフの複合グラフ
* ヘッダーに「検査人数」を表示
* 「テーブルを表示」あり

#### モニタリング項目(5)救急医療の東京ルールの適用件数

（共通コンポーネント）`components/index/_shared/charts/MixedChart.vue`（旧: `components/MixedBarAndLineChart.vue`）

* 「PCR検査陽性者数」「抗原検査陽性者数」「PCR検査陰性者数」「抗原検査陰性者数」の棒グラフと「検査人数（７日間移動平均）」「陽性率」の折れ線グラフの複合グラフ
* ヘッダーに「検査人数」を表示
* 「テーブルを表示」あり

#### モニタリング項目(6)入院患者数

`components/index/CardsMonitoring/HospitalizedNumber/Chart.vue`（旧: `components/DashedRectangleTimeBarChart.vue`）

* 「入院患者数」のみの棒グラフ
* 参考値（宿泊療養者・自宅療養者等を含んでいる5月11日までの値）については枠線が付いている
* 「テーブルを表示」あり

#### モニタリング項目(7)重症患者数

`components/index/CardsMonitoring/SevereCase/Chart.vue`（旧: `components/SevereCaseBarChart.vue`）

* 「重症患者数」のみの棒グラフ
* 「テーブルを表示」あり

### その他 参考指標

#### 陽性者の属性

`components/index/CardsReference/ConfirmedCasesAttributes/DataTable.vue`（旧: `components/DataTable.vue`）

* 「陽性者の属性」の表（ページネーションあり）

#### 陽性者数（区市町村別）

`components/index/CardsReference/ConfirmedCasesByMunicipalities/DataTable.vue`（旧: `components/ConfirmedCasesByMunicipalitiesTable.vue`）

* 「陽性者数（区市町村別）」の表（ページネーションなし）

#### 発症日別による陽性者数の推移

（共通コンポーネント）`components/index/_shared/charts/BarChart.vue`（旧: `components/TimeBarChart.vue`）

* 「発症日別による陽性者数の推移」の推移を時系列に並べた棒グラフ
* 「日別/累計」の切り替え可能
* 「テーブルを表示」あり
* 「累計」表示のときは，「発症日不明者 n 人を除く」の表示をヘッダーに追加する

#### 確定日別による陽性者数の推移

（共通コンポーネント）`components/index/_shared/charts/BarChart.vue`（旧: `components/TimeBarChart.vue`）

* 「確定日別による陽性者数の推移」の推移を時系列に並べた棒グラフ
* 「日別/累計」の切り替え可能
* 「テーブルを表示」あり

#### 検査実施件数

`components/index/CardsReference/TestedNumber/Chart.vue`（旧: `components/TimeStackedBarChart.vue`）

* 「健康安全研究センターが行った検査件数」と「医療機関等が行った検査件数」の推移をまとめて時系列に並べた積み上げ棒グラフ
* 「日別/累計」の切り替え可能
* 「テーブルを表示」あり

#### 受診相談窓口における相談件数

`components/index/CardsReference/MonitoringConsultationDeskReportsNumber/Chart.vue`（旧: `components/MonitoringConsultationDeskReportChart.vue`）

* 「相談件数」の棒グラフと「７日間移動平均」の折れ線グラフの複合グラフ
* 「テーブルを表示」あり

#### 新型コロナコールセンター相談件数

（共通コンポーネント）`components/index/_shared/charts/BarChart.vue`（旧: `components/TimeBarChart.vue`）

* 「新型コロナコールセンター相談件数」の推移を時系列に並べた棒グラフ
* 「日別/累計」の切り替え可能
* 「テーブルを表示」あり

#### 都営地下鉄の利用者数の推移

`components/index/CardsReference/Metro/Chart.vue`（旧: `components/MetroBarChart.vue`）

* 時間帯ごとの利用者数の変化についての棒グラフを並べて表示する
* 「テーブルを表示」あり

#### 都庁来庁者数の推移

`components/index/CardsReference/Agency/Chart.vue`（旧: `components/AgencyBarChart.vue`）

* 庁舎ごとの来庁者数の変化についての棒グラフを積み上げて表示する
* 「テーブルを表示」あり
