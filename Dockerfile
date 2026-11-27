FROM node:22.23.4-alpine AS base

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

# Artifact-only image: the deploy jobs `docker create` it, copy /public out and
# sync it to S3. Nothing runs it, so ship just the built site (no node_modules,
# source or .git). CMD is a placeholder because `docker create` needs one.
FROM scratch AS site
COPY --from=builder /app/public /public
CMD ["/none"]
