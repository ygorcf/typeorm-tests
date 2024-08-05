FROM node:16.20

WORKDIR /app
COPY --chown=root:root package*.json ./
RUN npm ci

COPY --chown=root:root . .
EXPOSE 8080

CMD npm run start
