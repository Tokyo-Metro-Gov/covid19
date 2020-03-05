FROM node:12.15.0-alpine

ARG NUXT_PORT="3000"
ARG NUXT_HOST="0.0.0.0"

ENV PORT=$NUXT_PORT \
    HOST=$NUXT_HOST

WORKDIR /var/www

COPY ./package.json ./

COPY ./yarn.lock ./

RUN yarn install

COPY ./ ./

EXPOSE $NUXT_PORT

CMD ["yarn", "dev"]
