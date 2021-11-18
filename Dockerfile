FROM node:16.11.1

WORKDIR /app
COPY / .

EXPOSE 6060/tcp

ENV PORT 6060

#CMD npm install -D typescript
#CMD npm install -D ts-node
RUN  npm install -g typescript
RUN  npm install -g ts-node
#CMD npm install -D tslib @types/node
RUN  npm install

CMD npm run run-ts
