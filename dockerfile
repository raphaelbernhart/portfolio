# Dockerfile
FROM node:16.18.1 as build

# create destination directory
RUN mkdir -p /app
WORKDIR /app

# copy the app, note .dockerignore
COPY ./ /app/
RUN yarn
RUN yarn run build

FROM node:16.18.1-alpine as production

RUN mkdir -p /app
WORKDIR /app

COPY --from=build /app/.nuxt /app/.nuxt

COPY ./package.json /app/
COPY ./nuxt.config.js /app/
COPY ./static /app/static

RUN yarn install --production

EXPOSE 3000
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "yarn", "start" ]
