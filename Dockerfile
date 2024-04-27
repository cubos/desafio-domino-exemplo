FROM node:22
WORKDIR /app
ADD package*.json /app
RUN npm ci
ADD src /app/src
CMD node src/index.mjs
