FROM node:16.16.0

WORKDIR /app

# install
COPY package*.json ./
RUN npm install --legacy-peer-deps

# copy source
COPY . .

# clean
RUN rm -rf .next docs/ko docs/en

# build Korean
RUN npm run build:ko

# clean caches
RUN rm -rf .next

# build English
RUN npm run build:en

RUN chown -R 1000:1000 /app/docs

CMD ["echo", "✅ Build complete"]

