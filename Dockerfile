FROM node:16-alpine3.15

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /wait
RUN chmod +x /wait

RUN apk update && apk add bash

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . /app/
