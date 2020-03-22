#! /usr/bin/env python3

# thanks : https://qiita.com/mida12251141/items/97bce06e4167db8ed3d5

import json
import datetime
import time
import math
from requests_oauthlib import OAuth1Session
from pytz import timezone
from dateutil import parser

##################################################################
## トークン関連

CK  = "XXXXXXXXXXXXXXXXXXXX"
CS  = "XXXXXXXXXXXXXXXXXXXX"
AT  = "XXXXXXXXXXXXXXXXXXXX"
ATS = "XXXXXXXXXXXXXXXXXXXX"

##################################################################

SEARCH_TWEETS_URL = 'https://api.twitter.com/1.1/search/tweets.json'
RATE_LIMIT_STATUS_URL = "https://api.twitter.com/1.1/application/rate_limit_status.json"
SEARCH_LIMIT_COUNT = 100

# セッション確立
def get_twitter_session():
    return OAuth1Session(CK, CS, AT, ATS)


# キーワード検索で得られたツイートを取得する
# max_idを使用して次の100件を取得
def search_twitter_timeline(keyword, since='', until='', max_id=''):
    timelines = []
    id = ''
    twitter = get_twitter_session()

    params = {'q': keyword, 'count': SEARCH_LIMIT_COUNT, 'result_type': 'mixed'}

    if max_id != '':
        params['max_id'] = max_id
    if since != '':
        params['since'] = since
    if until != '':
        params['until'] = until

    print(params)

    req = twitter.get(SEARCH_TWEETS_URL, params=params)

    if req.status_code == 200:
        search_timeline = json.loads(req.text)
        # APIからの返却内容を表示する
        # print(search_timeline)

        for tweet in search_timeline['statuses']:
            print('-' * 30)
            id = str(tweet['id'])
            print(id)
            print(str(parser.parse(tweet['created_at']).astimezone(timezone('Asia/Tokyo'))))

            # 次の100件を取得したときにmax_idとイコールのものはすでに取得済みなので捨てる
            if max_id == str(tweet['id']):
                print('continue')
                continue

            timeline = {'id': tweet['id']
                , 'created_at': str(parser.parse(tweet['created_at']).astimezone(timezone('Asia/Tokyo')))
                , 'text': tweet['text']
                , 'user_id': tweet['user']['id']
                , 'user_created_at': str(parser.parse(tweet['user']['created_at']).astimezone(timezone('Asia/Tokyo')))
                , 'user_name': tweet['user']['name']
                , 'user_screen_name': tweet['user']['screen_name']
                , 'user_description': tweet['user']['description']
                , 'user_location': tweet['user']['location']
                , 'user_statuses_count': tweet['user']['statuses_count']
                , 'user_followers_count': tweet['user']['followers_count']
                , 'user_friends_count': tweet['user']['friends_count']
                , 'user_listed_count': tweet['user']['listed_count']
                , 'user_favourites_count': tweet['user']['favourites_count']
                        }

            # urlを取得
            if 'media' in tweet['entities']:
                medias = tweet['entities']['media']
                for media in medias:
                    timeline['url'] = media['url']
                    break
            elif 'urls' in tweet['entities']:
                urls = tweet['entities']['urls']
                for url in urls:
                    timeline['url'] = url['url']
                    break
            else:
                timeline['url'] = ''

            timelines.append(timeline)
    else:
        print("ERROR: %d" % req.status_code)

    print('-' * 30)
    print(timelines)
    twitter.close()

    return timelines, id


# API利用回数に引っかかった場合に待機させる
def get_rate_limit_status():
    twitter = get_twitter_session()
    limit = 1
    remaining = 1
    reset_minute = 0

    req = twitter.get(RATE_LIMIT_STATUS_URL)
    if req.status_code == 200:
        limit_api = json.loads(req.text)

        limit = limit_api['resources']['search']['/search/tweets']['limit']
        remaining = limit_api['resources']['search']['/search/tweets']['remaining']
        reset = limit_api['resources']['search']['/search/tweets']['reset']
        reset_minute = math.ceil((reset - time.mktime(datetime.datetime.now().timetuple())) / 60)

    twitter.close()

    return limit, remaining, reset_minute


def check_api_remain_and_sleep():
    # APIの残り利用回数を取得
    limit, remaining, reset_minute = get_rate_limit_status()
    print('-' * 30)
    print('limit :{}'.format(limit))
    print('remaining :{}'.format(remaining))
    print('reset :{} minutes'.format(reset_minute))

    # APIの残り利用回数が0回の場合に回復するまで待機する
    if remaining == 0:
        time.sleep(60 * (int(reset_minute) + 1))

    return


def write_tweet_to_file(timelines, dt):
    # 日付ごとにjsonで書き込み
    # 1ツイートごとのjsonで書き込み後に改行を付与する
    f = open("tweet/tweet-" + dt + ".json", "a")
    for timeline in timelines:
        json.dump(timeline
                  , f
                  , ensure_ascii=False
                  , sort_keys=True
                  # ,indent=4
                  , separators=(',', ': '))
        f.write('\n')
    f.close()

    return


##################################################################
## メイン処理

timelines = []
# ツイートID
max_id = ''
# 検索ワード
keyword = '#####'
# ツイート取得対象日
start_dt = '20190330'

start_dt = datetime.datetime.strptime(start_dt, '%Y%m%d')
for i in range(7):
    dt = (start_dt - datetime.timedelta(days=i)).strftime('%Y-%m-%d')
    # print(dt)
    since = str(dt) + '_00:00:00_JST'
    until = str(dt) + '_23:59:59_JST'

    while True:
        check_api_remain_and_sleep()

        # ツイート検索
        timelines, max_id = search_twitter_timeline(keyword, since, until, max_id)

        time.sleep(5)

        if timelines == []:
            break

        write_tweet_to_file(timelines, dt)

        print(max_id)
        print(len(timelines))

        if len(timelines) < SEARCH_LIMIT_COUNT:
            break
