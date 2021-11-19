FROM node:16-alpine

WORKDIR /app
COPY / .

EXPOSE 6060/tcp

ENV PORT 6060

RUN  npm install -g typescript
RUN  npm install -g ts-node
RUN  npm install

CMD npm run run-ts
