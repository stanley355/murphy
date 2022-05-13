# 1. This tells docker to use the official image
FROM node:14-stretch as builder

ARG MORPHCLOUDS_URL=${MORPHCLOUDS_TOKEN}
ENV MORPHCLOUDS_URL=${MORPHCLOUDS_URL}

ARG MORPHCLOUDS_TOKEN=${MORPHCLOUDS_TOKEN}
ENV MORPHCLOUDS_TOKEN=${MORPHCLOUDS_TOKEN}

# 2. Copy the files in your machine to the Docker image
COPY ./ ./

RUN echo MORPHCLOUDS_TOKEN

# Build your program for release
RUN yarn
RUN yarn build

# Run the binary
CMD ["yarn", "start"]
