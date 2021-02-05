import csv
import datetime
import markdown
import pandas as pd
import re
import urllib.request


def markdown_to_html(input: str):
    return markdown.markdown(
        input,
        extensions=['markdown.extensions.tables']
    )


def now_in_jst():
    jst = datetime.timezone(datetime.timedelta(hours=9))
    return datetime.datetime.now(jst).isoformat(timespec='seconds')


MD_PATH: str = './FORKED_SITES.md'
LOG_PATH: str = './auto-link-check/result.csv'

with open(MD_PATH, 'r', encoding='utf-8') as f:
    md: str = f.read()

df = pd.read_html(markdown_to_html(md))

forked_sites: list = [
    {
        'timestamp': None,
        'url': url,
        'exists': None,
        'status': None
    }
    for url in df[0]['公開サイト']
]

for website in forked_sites:
    req = urllib.request.Request(website['url'])

    try:
        with urllib.request.urlopen(req) as r:
            website['exists'] = True
            website['status'] = str(r.status)
    except urllib.error.HTTPError as e:
        website['exists'] = False
        website['status'] = str(e.code)
    except urllib.error.URLError as e:
        website['exists'] = False
        website['status'] = str(e.reason)
    finally:
        website['timestamp'] = now_in_jst()

dead_sites: list = [
    website for website in forked_sites if website['exists'] is False]

if len(dead_sites) > 0:
    for i, website in enumerate(dead_sites):
        # dead_sites の URL を含む行を検出する
        row_find: str = r'(\n\|\[\]\(\d*\)\D+\|)(' + \
            website['url'] + r')(\|.+)\|{2}'

        # 該当する URL に二重線を引き，「リンク切れ」を追記
        row_replace: str = r'\1~~\2~~\3|**リンク切れ**|'

        md_replaced = re.sub(
            row_find,
            row_replace,
            md_replaced if i > 0 else md
        )

    with open(MD_PATH, 'w', encoding='utf-8', newline='\n') as f:
        f.write(md_replaced)

    with open(LOG_PATH, 'a', encoding='utf-8', newline='\n') as f:
        writer = csv.writer(f)

        for data in dead_sites:
            writer.writerow(data.values())
else:
    print('Nothing to update.')
