# How to contribute translations

We are using Transifex to manage the resources that are used by internationalized content.

## For contributors of translations

Please go to our project page on the Transifex.
https://www.transifex.com/stopcovid19-tokyo/stopcovid19tokyo

Please join our team from `Help Translate "StopCovid19Tokyo"` button. You will need to make/login account before joining our team.

![](img/2020-03-16-16-05-37.png)

After joining, please go to the dashboard page.

https://www.transifex.com/stopcovid19-tokyo/stopcovid19tokyo/dashboard/

Press `Translate` button on the language resource that you want to contribute.

![](img/2020-03-16-16-09-47.png)

You will see the translation editor. Search the text you want to translate from the left pane, then enter the translated text in the text area on the right pane.

![](img/2020-03-16-16-11-14.png)

After editing, please press `Save Translation` button. 

After the translation completed, the dev team will update the latest language resources with updated texts.

Transifex has some useful features like a dictionary feature. Feel free to use it if it is useful. Any suggestions are welcome!

## For devloppers

If you have something new texts which needs translation, please add the strings to `../assets/locales/ja.json` and make a pull request to `development`branch. You can use same string for key and value.

Please use `this.$t()` in your program.

