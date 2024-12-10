# Use Node.js image for building the React app
FROM node:16 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

# Copy the rest of the application files
COPY . ./

# Build the React application
RUN npm run build

# Use a lightweight Nginx server to serve the built files
FROM nginx:1.21
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the React app
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
