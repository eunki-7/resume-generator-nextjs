FROM node:16.16.0

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

RUN rm -rf .next
RUN npm run build:ko
RUN npm run build:en

CMD ["echo", "Build complete"]