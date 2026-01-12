FROM node:20-alpine AS base

RUN apk add git
RUN npm install -g pnpm@8

ENV NODE_ENV production

WORKDIR /app

COPY package.json pnpm-lock.yaml /app

RUN pnpm i --ignore-scripts --frozen-lockfile --prod --force

FROM base AS builder
ARG BACKEND_URL

COPY . /app

RUN pnpm build
