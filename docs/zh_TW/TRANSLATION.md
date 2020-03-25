# 如何貢獻翻譯

我們正在使用 Transifex 來管理多國語言的內容。

## 給翻譯的貢獻者們

請到我們在 Transifex 的專案頁面。
https://www.transifex.com/stopcovid19-tokyo/stopcovid19tokyo

請加入我們的小組，點擊 `協助翻譯 "StopCovid19Tokyo"` 按鈕。在加入小組之前會需要建立或是登入帳號。

![](../../.github/img/2020-03-16-16-05-37.png)

加入後，前往儀表板頁面。

https://www.transifex.com/stopcovid19-tokyo/stopcovid19tokyo/dashboard/

在想要幫忙翻譯的語言上面按下 `翻譯` 按鈕。

![](../../.github/img/2020-03-16-16-09-47.png)

您會看到翻譯編輯器。在左邊的區塊搜尋想要翻譯的文字，然後在右邊的區塊輸入翻譯過後的文字。

![](../../.github/img/2020-03-16-16-11-14.png)

編輯過後，記得按下 `儲存變更` 按鈕。

完成翻譯後,開發小組會把最新的翻譯更新。

Transifex 有很多有用的功能，像是字典功能，如果您覺得好用請自由使用。如果有任何其他提案也歡迎提出。

## 新增語言

如果想要新增語言。請透過 Transifex 系統提交申請。然而，在考量審核翻譯的工作量下，我們可能不會接受。

## 給開發者

如果你有新增文字需要翻譯，請把字串加到 `../assets/locales/ja.json` 並推送 Pull Request 到 `development` 分支。 您可以用相同字串作為 key 和 value 。

我們正在使用 [nuxt-i18n](https://github.com/nuxt-community/nuxt-i18n) 作為翻譯引擎。請參考 [他們的文件](https://nuxtjs.org/examples/i18n/) 來了解如何使用這個函式庫（Library）。

如果你急需這個文字的翻譯的話，請在 Code for Japan Slack (查看 [教學](https://github.com/tokyo-metropolitan-gov/covid19/blob/development/docs/zh_TW/CONTRIBUTING.md#%E5%A6%82%E4%BD%95%E5%8F%83%E8%88%87%E4%BA%A4%E6%B5%81)) 的 #covid19 頻道中，要求從 Transifex 推送最新的更新。 

文字翻譯過後，組織者會把新的資源檔套用到 `development` 分支上。
