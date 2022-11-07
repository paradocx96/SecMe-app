FROM node:16.14.0-alpine

EXPOSE 3000

WORKDIR /app

COPY . .

RUN yarn install

CMD ["yarn", "start"]
