# Use a specific version of Node.js
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install specific npm version
RUN npm install -g npm@10.8.1

# Set proxy if needed
# RUN npm config set proxy http://proxy.company.com:8080
# RUN npm config set https-proxy http://proxy.company.com:8080

# Increase network timeout
RUN npm config set fetch-retry-maxtimeout 120000

# Install dependencies
RUN npm ci || (sleep 5 && npm ci)

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build
EXPOSE 3000
# Start the application
CMD [ "npm", "run", "dev" ]


