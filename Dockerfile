# Use an official Node.js runtime as a base image
FROM node:14

# Set the working directory in the container
WORKDIR /

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Expose the port that your app will run on
EXPOSE 8080

# Define the command to run your application
CMD ["node", "/src/customer-management-backend/server.js"]
