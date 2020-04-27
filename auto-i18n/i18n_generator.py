import glob
import re
import os
import json
from datetime import datetime, timedelta, timezone
from bs4 import BeautifulSoup

######
# i18n関連のファイルのうち、元となるja.jsonを自動生成するスクリプトです。
# 必要なキーの追加、不要なキーの削除、を自動化し、保守性を保つことを目的としています。
# このスクリプトは派生の滋賀県版で使われている https://gist.github.com/rioil/d44a475710fa21c8d16f1d55b754e8e2 と
# 兵庫県版で使われている https://github.com/stop-covid19-hyogo/covid19/blob/development/auto-i18n/hyogo-i18n.py を
# 元に作成されています。
######

# チェックするディレクトリのリスト
CHECK_DIR = ["pages", "components", "layouts", "data", "utils"]

# チェックするjsonファイルのリスト
# 現状はdata.jsonとpatient.jsonしかないが、のちにファイル分割や、データ追加により必要になった場合は追加しなければならない。
JSON_FILES = ["data.json", "patient.json"]

# チェックするTypeScriptファイルのリスト
# 現状はformatTable.tsしかないが、のちに表追加や、データ追加により必要になった場合は追加しなければならない。
TS_FILES = ["formatTable.ts"]

# タグの正規表現パターン
tag_pattern_t = re.compile("\$t\([ ]*?['|`][^']*?['|`]")
tag_pattern_tc = re.compile("\$tc\([ ]*?['|`][^']*?['|`]")

# tsファイル内のヘッダーの正規表現パターン
header_pattern = re.compile("\{ text: '[^']*?', value: '[^']*?'")

# 文字エンコーディング
ENCODING = "UTF-8"

# 出力ファイル設定
OUTPUT_DIR = "auto-i18n"
CHECK_RESULT = "result.csv"

# 翻訳ファイルパス
JA_JSON_PATH = os.path.join(os.pardir, "assets/locales/ja.json")

# ログに用いる時間のタイムゾーン
jst = timezone(timedelta(hours=9), "JST")

# 全てのタグリスト
all_tags = []

# 警告の数
warn_count = 0

# チェックされたファイルの数
file_count = 0

# 作られたjson
made_json = {}

with open(os.path.join(os.pardir, OUTPUT_DIR, CHECK_RESULT), mode="a", encoding=ENCODING) as result, \
        open(JA_JSON_PATH, mode="r", encoding=ENCODING) as ja_file:
    # ディレクトリ毎にチェック
    for cdir in CHECK_DIR:
        # リポジトリのルートからのパスをauto-i18nからの相対パスに変換
        cdir = os.path.join(os.pardir, cdir)
        # データディレクトリ以外の場合
        if "data" not in cdir and "utils" not in cdir:
            # すべてのVueファイルを検索
            vue_files = glob.glob(cdir + os.sep + "**" + os.sep + "*.vue", recursive=True)
            file_count += len(vue_files)

            # 各Vueファイルについて処理
            for path in vue_files:
                with open(path, encoding=ENCODING) as file:
                    # ファイルの内容を文字列として取得
                    # ここで改行を空白として扱うのは、vue内のi18nタグが正しく認識できない場合があるため
                    content = ' '.join([l.strip() for l in file])
                    # 全タグを正規表現で取得
                    t_tags = [tag[4:(len(tag) - 1)] for tag in tag_pattern_t.findall(content) if
                              tag[4:(len(tag) - 1)] != '']
                    tc_tags = [
                        tag[5:(len(tag) - 1)] for tag in tag_pattern_tc.findall(content) if tag[5:(len(tag) - 1)] != ''
                    ]
                    # 「'」で始まっているタグがあるので修正
                    fixed_tags = []
                    for tag in t_tags:
                        start = 0
                        if tag[0] == "'":
                            start = 1
                        fixed_tags.append(tag[start:])
                    for tag in tc_tags:
                        start = 0
                        if tag[0] == "'":
                            start = 1
                        fixed_tags.append(tag[start:])
                    # i18nタグ内のpathを取得
                    soup = BeautifulSoup(content, "html.parser")
                    i18n_tags = [tag.get("path") for tag in soup.find_all("i18n")]
                    # タグを統合し、重複分を取り除く
                    all_tags = list(set(all_tags + fixed_tags + i18n_tags))
        elif "utils" in cdir:
            # すべてのtsファイルを検索
            ts_files = glob.glob(cdir + os.sep + "**" + os.sep + "*.ts", recursive=True)

            # 各tsファイルについて処理
            for path in ts_files:
                file_name = os.path.basename(path)
                # tsファイルが調べるべきtsであるか
                if file_name in TS_FILES:
                    # 調べるべきtsの場合、ファイルをカウント
                    file_count += 1
                    with open(path, encoding=ENCODING) as file:
                        # ファイルの内容を文字列として取得
                        content = ''.join([l.strip() for l in file])
                        # 抽出したヘッダー内のtextとvalueは変数として読み込まれることになるので、
                        # あらかじめ設定しておく
                        text = "text"
                        value = "value"
                        # ヘッダーを正規表現で取得し、textを抽出
                        headers = [eval(str_header + " }")[text] for str_header in header_pattern.findall(content)]
                        # タグを統合し、重複分を取り除く
                        all_tags = list(set(all_tags + headers))
        else:
            # すべてのJsonファイルを検索
            json_files = glob.glob(cdir + os.sep + "**" + os.sep + "*.json", recursive=True)

            # 各jsonファイルについて処理
            for path in json_files:
                file_name = os.path.basename(path)
                # jsonファイルが調べるべきjsonであるか
                if file_name in JSON_FILES:
                    # 調べるべきjsonの場合、ファイルをカウント
                    file_count += 1
                    with open(path, encoding=ENCODING) as file:
                        # jsonを読み込み
                        json_content = json.load(file)
                        # タグリストを生成
                        tags = []
                        if file_name == JSON_FILES[0]:  # data.jsonの場合
                            for patients in json_content["patients"]["data"]:
                                # 居住地を取得
                                tags.append(patients["居住地"])
                                # 年代を取得
                                tags.append(patients["年代"])
                                # 性別を取得
                                tags.append(patients["性別"])
                                # 退院を取得
                                tags.append(patients["退院"])
                        elif file_name == JSON_FILES[1]:  # patient.jsonの場合
                            for city in json_content["datasets"]["data"]:
                                # エリアを取得
                                tags.append(city["area"])
                                # ラベルを取得、「小計」は除外する
                                tags.append(city["label"]) if city["label"] != "小計" else None
                                # ルビを取得
                                tags.append(city["ruby"])

                        # タグを統合し、重複分を取り除く
                        all_tags = list(set(all_tags + tags))
                    # Noneが混じっているので、取り除く
                    all_tags.pop(all_tags.index(None))
                    # 全角のハイフン、半角のハイフン、全角のダッシュが混じっているので、取り除く
                    # 理由は components/cards/ConfirmedCasesAttributesCard.vue の75行目辺りを参照。
                    for x in ["-", "‐", "―"]:
                        try:
                            all_tags.pop(all_tags.index(x))
                        except Exception:
                            pass

    # 翻訳が複数あるもの("."で区切られている特殊なもの)を保管するリスト
    has_many_tags = []

    # 仮のja.jsonを作る
    tentative_ja_json = {}
    for tag in all_tags:
        # "."で区切られている特殊なもの("件.tested"や"件.reports"のような翻訳が複数あるもの)を判別する
        # 普通のものに関しては、なにもせず代入する
        tag_splitted = tag.split(".")
        if len(tag_splitted) == 2:
            found = False
            for many_tag in has_many_tags:
                if tag_splitted[0] == many_tag[0] and tag_splitted[1] != many_tag[1]:
                    found = True
                    many_tag[2] = found
            # ogp.og:imageに関しては一つしかない例外なので、特例として処理する
            if tag_splitted[0] == "ogp":
                found = True
            has_many_tags.append(tag_splitted + [found])
        else:
            # N代は除外する(既に"{age}代"として存在するため)
            if tag[-1:] == "代":
                try:
                    int(tag[:-1])
                    continue
                except Exception:
                    pass
            tentative_ja_json[tag] = tag

    # "."でわけられていたものに関して、複数あれば(many_tag[2]がtrueであれば)
    # 辞書型として展開して代入し、そうでなければ普通のキーとして代入する
    for many_tag in has_many_tags:
        if many_tag[2]:
            if tentative_ja_json.get(many_tag[0]):
                tentative_ja_json[many_tag[0]][many_tag[1]] = many_tag[0]
            else:
                tentative_ja_json[many_tag[0]] = {
                    many_tag[1]: many_tag[0]
                }
        else:
            full_tag = ".".join(many_tag[:2])
            tentative_ja_json[full_tag] = full_tag

    # ja.jsonを読み込む
    ja_json = json.load(ja_file)

    # 念のためassert
    assert isinstance(ja_json, dict)

    tentative_json_keys = list(tentative_ja_json.keys())
    ja_json_keys = list(ja_json.keys())

    # 以前はなかったが今はある翻訳を追加する
    for key in tentative_json_keys:
        ja_tag = ja_json.get(key)
        tentative_tag = tentative_ja_json.get(key)
        if not ja_tag:
            ja_json[key] = tentative_tag
            print("Add TAG: " + str(tentative_tag) + " to " + JA_JSON_PATH)
            if not warn_count:
                result.write(",".join(["RUN", datetime.now(jst).strftime("%Y/%m/%d %H:%M")]) + '\n')
            result.write(",".join(["TAG_ADD", str(tentative_tag)]) + '\n')
            warn_count += 1
        # 変更してはならない部分を変更する可能性があるため、変更に関しては自動化しない。
        # elif ja_tag != tentative_tag:
        #     ja_json[key] = tentative_tag
        #     print("Change TAG: " + str(ja_tag) + " to " + str(tentative_tag))
        #     if not warn_count:
        #         result.write(",".join(["RUN", datetime.today().strftime("%Y/%m/%d %H:%M")]) + '\n')
        #     result.write(",".join(["TAG_CHANGE", str(ja_tag) + " to " + str(tentative_tag)]) + '\n')
        #     warn_count += 1
        if ja_tag:
            ja_json_keys.pop(ja_json_keys.index(key))

    # 以前はあったが今はない翻訳を削除する
    for key in ja_json_keys:
        ja_tag = ja_json.get(key)
        ja_json.pop(key)
        print("Remove TAG: " + str(ja_tag) + " from " + JA_JSON_PATH)
        if not warn_count:
            result.write(",".join(["RUN", datetime.today().strftime("%Y/%m/%d %H:%M")]) + '\n')
        result.write(",".join(["TAG_REMOVE", str(ja_tag)]) + '\n')
        warn_count += 1

    made_json = ja_json

with open(JA_JSON_PATH, mode="w", encoding=ENCODING) as file:
    json.dump(made_json, file, ensure_ascii=False, indent=2)

# 以下、リザルト
# タグ総数
print("total : " + str(len(all_tags)))
# 警告数(未登録タグ数 + 削除済タグ数)
print("warn : " + str(warn_count))
# ファイル総数
print("checked file: " + str(file_count))
