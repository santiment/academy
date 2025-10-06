FROM debian:bullseye

RUN apt-get update && \
    apt-get install -y \
        python3 \
        python3-dev \
        python3-pip \
        build-essential \
        curl git

RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs

WORKDIR /app

COPY ./ /app

ENV BACKEND_URL="globalThis.env?.BACKEND_URL"
ENV NODE_OPTIONS="--openssl-legacy-provider"

RUN npm install -g yarn --force && yarn install --production

RUN yarn build
