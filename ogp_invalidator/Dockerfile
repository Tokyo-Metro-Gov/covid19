FROM ubuntu:18.04

ENV PROJECT_ROOTDIR /app/

WORKDIR $PROJECT_ROOTDIR

RUN apt-get -y update && apt-get -y upgrade && apt-get install -y chromium-chromedriver python3-selenium

COPY twitter_card_invalidator.py $PROJECT_ROOTDIR

# RUN pip3 install -U pip && pip install -r requirements.txt

CMD ["python3", "twitter_card_invalidator.py", "--out"]
