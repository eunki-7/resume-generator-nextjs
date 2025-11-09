FROM node:16.16.0

WORKDIR /app


# ✅ Puppeteer 필수 리눅스 패키지 설치
RUN apt-get update && apt-get install -y \
    apt-transport-https \
    ca-certificates \
    fonts-liberation \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libcups2 \
    libdbus-1-3 \
    libdrm2 \
    libgbm1 \
    libgtk-3-0 \
    libnspr4 \
    libnss3 \
    libx11-6 \
    libx11-xcb1 \
    libxcomposite1 \
    libxdamage1 \
    libxext6 \
    libxfixes3 \
    libxrandr2 \
    libxshmfence1 \
    libxss1 \
    libxtst6 \
    wget \
    xdg-utils \
    --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*

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

# Generate PDF Files
RUN npm run pdf:ko
RUN npm run pdf:en

RUN chown -R 1000:1000 /app/docs

CMD ["echo", "✅ Build complete"]

