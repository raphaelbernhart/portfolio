FROM nginx:1.17.0-alpine AS production
WORKDIR /app

COPY ./ /app
RUN  rm -r /app/package.json

RUN rm /etc/nginx/conf.d/default.conf
COPY /config/nginx.conf /etc/nginx/conf.d/

VOLUME [ "/var/log/nginx" ]

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]

EXPOSE 80
