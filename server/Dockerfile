FROM node:argon

RUN mkdir -p server
WORKDIR server

COPY package.json .
RUN npm install

COPY index.js .
COPY modules modules

EXPOSE 3000
CMD node index.js
