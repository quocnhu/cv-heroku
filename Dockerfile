# Stage 1: Build the React app
FROM node:16 AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire React app
COPY . .

# Build the app for production
RUN npm run build

# Stage 2: Serve the app using nginx
FROM nginx:stable-alpine

# Copy the React build output to nginx's HTML directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the default nginx port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
