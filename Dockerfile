# Use an official Node.js runtime as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code to the working directory
COPY . .

# Build the app
# RUN npm run build

# Expose the port that the app will run on
EXPOSE 5173

# Define the command to run the app
CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0" ]