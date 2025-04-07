FROM node:22-alpine3.20
ARG PROJECT_DIR

# Install needed system libraries (sharp, etc.)
RUN apk update && apk add --no-cache \
  build-base \
  gcc \
  autoconf \
  automake \
  zlib-dev \
  libpng-dev \
  nasm \
  bash \
  vips-dev \
  git

# Create app directory
WORKDIR /opt/app

# Copy only dependency files first for caching
COPY ./$PROJECT_DIR/package.json ./$PROJECT_DIR/yarn.lock ./

# Install dependencies (build native modules here)
RUN yarn install

# We do NOT copy the entire project here for dev.
# We will mount the code in docker-compose instead.
CMD ["yarn", "dev"]
