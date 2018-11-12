FROM node:8

WORKDIR /home/node
USER node
COPY --chown=node package.json yarn.lock ./
RUN yarn install
COPY --chown=node . .
RUN npm run build

FROM nginx

COPY --chown=node dist /usr/share/nginx/html
