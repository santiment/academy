FROM node:20-alpine AS base

RUN apk add git
RUN npm install -g pnpm@8

WORKDIR /app

COPY package.json pnpm-lock.yaml /app

RUN pnpm i --frozen-lockfile

FROM base AS builder
ENV NODE_ENV=production
ENV ASTRO_TELEMETRY_DISABLED=1

ARG BACKEND_URL
ARG SITE_URL

COPY . /app

RUN pnpm build

# The site is static (Astro, no adapter). The deploy jobs only
# `docker create` this image and `docker cp /app/public` to S3, so the final
# image carries just the build output: no node_modules, pnpm store or sources.
FROM node:20-alpine
ENV NODE_ENV=production
ENV ASTRO_TELEMETRY_DISABLED=1

WORKDIR /app

COPY --from=builder /app/public /app/public
