FROM node:18.7 

WORKDIR /app

COPY package.json /app/package.json

COPY . /app
RUN yarn --trace-deprecation

CMD ["yarn", "start"]