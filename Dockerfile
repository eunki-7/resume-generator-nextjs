FROM node:16.16.0

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build:ko
RUN npm run build:en