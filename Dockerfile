FROM node:16.16.0

WORKDIR /app

# Copy only package.json first for caching optimization
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy source code
COPY . .

# Clean previous caches
RUN rm -rf .next
RUN rm -rf docs/ko docs/en

# Build Korean
ENV RESUME_LANG=ko
RUN npm run build:ko

# Clean again
RUN rm -rf .next

# Build English
ENV RESUME_LANG=en
RUN npm run build:en

CMD ["echo", "Build complete"]
