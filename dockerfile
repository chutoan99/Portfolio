# Use a specific version of Node.js
FROM node:14-alpine
# Set working directory inside the container
WORKDIR /app
# Copy package.json and package-lock.json
COPY package*.json ./
# Install dependencies
RUN npm install --force
# Copy the rest of the application code
COPY . .
# Build the application
RUN npm run build
# Start the application
CMD [ "npm", "run" , "dev" ]