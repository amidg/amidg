FROM node:18-bookworm
WORKDIR /app
COPY package*.json ./
RUN yarn install
RUN mv /app/node_modules /tmp/
