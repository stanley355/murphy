# 1. This tells docker to use the official image
FROM node:14-stretch as builder

ENV MORPHCLOUDS_URL https://morphclouds.herokuapp.com

ENV MORPHCLOUDS_TOKEN wysiati
ENV NEWSAPI_KEY f78650dfd2d444a589b44ce964431853

# 2. Copy the files in your machine to the Docker image
COPY ./ ./

# Build your program for release
RUN yarn
RUN yarn build

# Run the binary
CMD ["yarn", "start"]
