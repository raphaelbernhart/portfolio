# Dockerfile
FROM node:16.14.2-alpine as build

# create destination directory
RUN mkdir -p /app
WORKDIR /app

# copy the app, note .dockerignore
COPY ./ /app/
RUN npm install
RUN npm run build

FROM node:16.14.2-alpine as production

# Install git
RUN apk add git

RUN mkdir -p /app
WORKDIR /app

COPY --from=build /app/package.json /app/
COPY --from=build /app/.nuxt /app/.nuxt
COPY --from=build /app/public /app/public

RUN npm install --production

EXPOSE 3000
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "start" ]

# FROM node:16.14.2-alpine3.15

# ENV NUXT_VERSION=2.15.6

# WORKDIR /app

# ADD ./ ./
# RUN : \
#     && yarn install \
#     && yarn build --standalone \
#     && rm -rf node_modules \
#     && rm package.json \
#     && yarn add "nuxt-start@${NUXT_VERSION}" \
#     && yarn cache clean \
#     && :

# ENTRYPOINT ["npx", "nuxt-start"]
# EXPOSE 3000
