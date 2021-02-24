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
LOG_PATH: str = './audit-forked-sites/error.csv'

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
    req = urllib.request.Request(
        website['url'],
        data=None,
        headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:86.0) Gecko/20100101 Firefox/86.0'
        }
    )

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

alive_sites: list = [
    website for website in forked_sites if website['exists'] is True]

if len(alive_sites) > 0:
    for website in alive_sites:
        # alive_sites の内，アクセスが復帰した URL を含む行を検出する
        row_find: str = r'(\n\| *\[\]\(\d*\)[^\W\s]+ *\| *' + \
            website['url'] + r' *\|.*\|.*\| *)\*\*リンク切れ\*\*( *\|)'

        # 該当する行の「リンク切れ」表記を削除する
        row_replace: str = r'\1\2'

        md = re.sub(
            row_find,
            row_replace,
            md
        )
else:
    print('There is no website which has been alive or recovered.')

dead_sites: list = [
    website for website in forked_sites if website['exists'] is False]

if len(dead_sites) > 0:
    for website in dead_sites:
        # dead_sites の URL を含む行を検出する
        row_find: str = r'(\n\| *\[\]\(\d*\)[^\W\s]+ *\| *' + \
            website['url'] + r' *\|.*\|.*\| *)( *\|)'

        # 該当する URL を含む行に「リンク切れ」を追記
        row_replace: str = r'\1**リンク切れ**\2'

        md = re.sub(
            row_find,
            row_replace,
            md
        )

    with open(LOG_PATH, 'a', encoding='utf-8', newline='\n') as f:
        writer = csv.writer(f)

        for data in dead_sites:
            writer.writerow(data.values())
else:
    print('There is no website which has been dead.')

with open(MD_PATH, 'w', encoding='utf-8', newline='\n') as f:
    f.write(md)
