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

# clean cache so English는 절대 Korean JS 안 섞임
RUN rm -rf .next

# build English
RUN npm run build:en

RUN chown -R 1000:1000 /app/docs

CMD ["echo", "✅ Build complete"]

