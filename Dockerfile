FROM node:17.1-slim

ARG GIT_HEAD
RUN GIT_HEAD=$GIT_HEAD
RUN apt-get update || : && apt-get install -y \
    python3 \
    python3-dev \
    python3-pip \
    build-essential
    
RUN ln -s /usr/bin/python3 /usr/bin/python

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock

RUN npm install -g yarn --force
RUN yarn install --production

COPY ./ /app

RUN yarn build

