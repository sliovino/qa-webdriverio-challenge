FROM node:20

WORKDIR /usr/src/app

# Install dependencies for Chrome
RUN apt-get update && apt-get install -y \
    wget \
    gnupg \
    unzip \
    xvfb \
    && rm -rf /var/lib/apt/lists/*

# Install Google Chrome
RUN wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb \
    && apt-get update \
    && apt-get install -y ./google-chrome-stable_current_amd64.deb \
    && rm google-chrome-stable_current_amd64.deb

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the tests
COPY . .

# Default command (can be overridden in docker-compose)
CMD ["npm", "run", "test:desktop"]
