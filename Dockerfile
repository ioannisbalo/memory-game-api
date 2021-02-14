FROM node:14.15.5-alpine3.10

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY yarn.lock yarn.lock
COPY package.json package.json

RUN yarn install

COPY . .

EXPOSE 4000

ENTRYPOINT [ "yarn", "start:dev" ]
