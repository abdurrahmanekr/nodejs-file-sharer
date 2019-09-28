FROM node:10
MAINTAINER abdurrahmaneker58@gmail.com

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

VOLUME ["/usr/src/app/uploaded_files"]

EXPOSE 1453
CMD [ "node", "src/index.js" ]
