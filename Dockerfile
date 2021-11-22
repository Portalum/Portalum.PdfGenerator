FROM node:16-alpine

WORKDIR /app
COPY / .

EXPOSE 80/tcp

ENV PORT 80

RUN  npm install -g typescript && npm install -g ts-node && npm install

CMD npm run run-ts
