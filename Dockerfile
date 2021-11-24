FROM node:16.13-slim

ARG GIT_HEAD

RUN GIT_HEAD=$GIT_HEAD && \
    apt-get update || : && apt-get install -y \
    python3 \
    python3-dev \
    python3-pip \
    build-essential

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock

RUN npm install -g yarn path stream --force && yarn install --production

COPY ./ /app

RUN yarn build

