FROM node:14.17.0-alpine3.12 as frontend-build

WORKDIR /src

ADD ./yarn.lock ./package.json ./
RUN yarn install

ADD ./ ./
RUN yarn build --standalone

FROM node:14.17.0-alpine3.12

ENV NUXT_VERSION=2.15.8

WORKDIR /app

RUN yarn add "nuxt-start@${NUXT_VERSION}"

COPY --from=frontend-build /src/.nuxt /app/.nuxt
COPY --from=frontend-build /src/nuxt.config.js /app/
COPY --from=frontend-build /src/static /app/

ENTRYPOINT ["npx", "nuxt-start"]
EXPOSE 3000