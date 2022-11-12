FROM node:18.7 

WORKDIR /app

COPY package.json /app/package.json

RUN yarn

CMD ["yarn", "start"]