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

for page in $PAGES; do
  for lang in $LANGS; do
    echo "https://stopcovid19.metro.tokyo.lg.jp/${lang}/cards/${page}"
  done
  echo "https://stopcovid19.metro.tokyo.lg.jp/cards/${page}"
done
