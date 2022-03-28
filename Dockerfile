# 1. This tells docker to use the official image
FROM node:14-stretch as builder

# 2. Copy the files in your machine to the Docker image
COPY ./ ./

# Build your program for release
RUN yarn
RUN yarn build

# Run the binary
CMD ["yarn", "start"]
