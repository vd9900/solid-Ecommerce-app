# Use an official Node.js runtime as the parent image
FROM node:16.13.0-alpine3.13 AS build

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

RUN npm config set strict-ssl false


# Install the dependencies
RUN npm install


# Copy the rest of the application files to the container
COPY . .

# Expose port 3000 for the application
EXPOSE 5000

# Start the application
CMD [ "npm", "start" ]
