FROM debian:bullseye

RUN apt-get update && \
    apt-get install -y \
        python3 \
        python3-dev \
        python3-pip \
        build-essential \
        curl git

WORKDIR /app

COPY ./ /app

RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs

RUN npm install -g yarn --force && yarn install --production

RUN yarn build
