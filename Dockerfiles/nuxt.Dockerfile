FROM node

WORKDIR /usr/src/server

RUN mkdir -p /usr/src/server

COPY . /usr/src/server

RUN npm i

EXPOSE 3000

CMD [ "npm", "dev" ]