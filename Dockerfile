FROM node:11-alpine

ARG GIT_HEAD
RUN GIT_HEAD=$GIT_HEAD

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock

RUN npm install -g yarn
RUN yarn install --production

COPY ./ /app

RUN yarn build

