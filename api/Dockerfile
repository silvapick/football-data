FROM node:16.13.1-alpine AS base
RUN apk --no-cache add dumb-init
RUN mkdir -p /home/node/app && chown node:node /home/node/app
WORKDIR /home/node/app
USER node
RUN mkdir tmp

FROM base AS dependencies
COPY --chown=node:node ./api/package*.json /home/node/app/
RUN npm i
COPY --chown=node:node . .

FROM dependencies AS build
RUN node ace build --production

FROM base AS production
ENV NODE_ENV=production
ENV PORT=3333
ENV HOST=0.0.0.0
COPY --chown=node:node ./api/package*.json /home/node/app/
RUN npm ci --production
COPY --chown=node:node --from=build /home/node/app/build .
RUN node --harmony_proxies ace migration:run --force
RUN node --harmony_proxies ace db:seed
EXPOSE 3333
CMD [ "dumb-init", "node", "server.js"]
