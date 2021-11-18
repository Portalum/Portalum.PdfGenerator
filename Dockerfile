FROM $DOCKERIMAGE

WORKDIR /app
COPY / .

EXPOSE 6060/tcp

ENV PORT 6060

CMD npm install
CMD npm run run-ts
