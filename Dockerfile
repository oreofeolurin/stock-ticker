FROM node:12.2
ENV NODE_ENV development

# Set app directory
WORKDIR /app

# Install app dependencies
# Note: webpack.config.js is not used yet, to be used with Hot Module Reloading
COPY package.json yarn.lock tsconfig.json nodemon.json webpack.config.js ./
RUN yarn install --frozen-lockfile --dev

ENV PORT 3000
EXPOSE $PORT 3000

# No src files are added to container here.
# Dockerfile.dev is to be used with volume mounting from host via docker-compose or:
# docker run -v ./src:/app/src:ro -v ./migrations:/app/migrations

CMD [ "yarn", "start:dev" ]
