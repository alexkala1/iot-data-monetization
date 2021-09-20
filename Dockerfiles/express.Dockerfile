FROM node

WORKDIR /usr/src/server

RUN mkdir -p /usr/src/server

COPY . /usr/src/server

COPY .env.sample .env

RUN npm i

EXPOSE 3001