FROM node:16 AS builder

RUN sed -i 's|http://deb.debian.org/debian|http://archive.debian.org/debian|g' /etc/apt/sources.list && \
    sed -i 's|http://security.debian.org/|http://archive.debian.org/|g' /etc/apt/sources.list && \
    echo 'Acquire::Check-Valid-Until "false";' > /etc/apt/apt.conf.d/99no-check-valid-until && \
    apt-get update && \
    apt-get install -y \
        python3 \
        python3-dev \
        python3-pip \
        build-essential

WORKDIR /app

COPY ./ /app

RUN npm install -g yarn --force && yarn install --production

RUN yarn build

