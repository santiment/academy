FROM node:13 AS builder

ARG GIT_HEAD

RUN GIT_HEAD=$GIT_HEAD && \
    apt-get update || : && apt-get install -y \
    python3 \
    python3-dev \
    python3-pip \
    build-essential

WORKDIR /app

COPY ./ /app

RUN npm install -g yarn --force && yarn install --production

RUN yarn build

