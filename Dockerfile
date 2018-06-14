FROM node:8.10

LABEL maintainer="hajek.rob@gmail.com"

WORKDIR /usr/src/app
COPY package.json .
RUN npm i

COPY . .

CMD ["npm", "start"]
