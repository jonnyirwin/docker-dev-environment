FROM node:lts AS dev

EXPOSE 3000

ARG BUILD_API_BASE_URL
ENV API_BASE_URL=$BUILD_API_BASE_URL PATH=/node/node_modules/.bin:$PATH

WORKDIR /node

COPY package*.json ./

RUN mkdir app && chown -R node:node .

USER node

RUN npm install && npm cache clean --force

WORKDIR /node/app

COPY --chown=node:node . .

RUN next build && next export -o ./dist

RUN ls -lah ./dist

CMD ["next", "start"]

FROM nginx:mainline

COPY --from=dev /node/app/dist /usr/share/nginx/html