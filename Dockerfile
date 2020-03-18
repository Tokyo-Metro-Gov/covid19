FROM node:10.19-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3000
ENV HOST 0.0.0.0

CMD ["yarn", "dev"]
