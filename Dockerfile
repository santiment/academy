FROM node:17.1-slim

ARG GIT_HEAD
RUN GIT_HEAD=$GIT_HEAD
RUN apt-get update || : && apt-get install python -y

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock

RUN npm install -g yarn --force
RUN yarn install --production

COPY ./ /app

RUN yarn build

