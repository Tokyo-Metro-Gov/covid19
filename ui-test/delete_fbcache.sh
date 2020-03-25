#!/bin/bash

source ../.env # you have to set FB_ACCESS_TOKEN='{your access token}' in the .env file

LANGS="en zh-cn zh-tw ko ja-basic"

PAGES=$(cat <<EOT
details-of-confirmed-cases
number-of-confirmed-cases
attributes-of-confirmed-cases
number-of-tested
number-of-reports-to-covid19-telephone-advisory-center
number-of-reports-to-covid19-consultation-desk
predicted-number-of-toei-subway-passengers
agency
EOT
)

curl -i -X POST \
  "https://graph.facebook.com/v6.0/?scrape=true&id=https%3A%2F%2Fstopcovid19.metro.tokyo.lg.jp%2F&access_token=${FB_ACCESS_TOKEN}"

for lang in $LANGS; do
  echo "https://graph.facebook.com/v6.0/?scrape=true&id=https%3A%2F%2Fstopcovid19.metro.tokyo.lg.jp%2F${lang}%2F&access_token=${FB_ACCESS_TOKEN}"
  for page in $PAGES; do
    curl -i -X POST \
      "https://graph.facebook.com/v6.0/?scrape=true&id=https%3A%2F%2Fstopcovid19.metro.tokyo.lg.jp%2F${lang}%2Fcards%2F${page}%2F&access_token=${FB_ACCESS_TOKEN}"
  done
  curl -i -X POST \
    "https://graph.facebook.com/v6.0/?scrape=true&id=https%3A%2F%2Fstopcovid19.metro.tokyo.lg.jp%2F${lang}%2F&access_token=${FB_ACCESS_TOKEN}"
done
