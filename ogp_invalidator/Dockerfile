FROM ubuntu:18.10

ENV PROJECT_ROOTDIR /app/

WORKDIR $PROJECT_ROOTDIR

COPY install_dependencies.sh $PROJECT_ROOTDIR

RUN ./install_dependencies.sh

COPY twitter_card_invalidator.py $PROJECT_ROOTDIR

CMD ["python3", "twitter_card_invalidator.py", "--out"]
