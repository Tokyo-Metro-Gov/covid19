FROM node:12.6-alpine

WORKDIR /app

RUN apk update && \
    apk add git && \
    apk add --no-cache curl && \
    curl -o- -L https://yarnpkg.com/install.sh | sh

ENV PATH $HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH

COPY package*.json ./

RUN yarn install

COPY . ./app

EXPOSE 3000
ENV HOST 0.0.0.0

CMD ["yarn", "dev"]
