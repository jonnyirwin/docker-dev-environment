FROM node:lts-alpine

WORKDIR /backend

COPY package*.json ./

RUN npm i && npm cache clean --force

ENV PATH="/backend/node_modules/.bin:${PATH}"

COPY . .

CMD ["node", "./bin/www"]