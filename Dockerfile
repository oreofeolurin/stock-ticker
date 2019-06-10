FROM node:12.2
ENV NODE_ENV development

# Set app directory
WORKDIR /app

# Install app dependencies
COPY package.json yarn.lock tsconfig.json tsconfig.build.json nodemon.json ./
RUN yarn install --frozen-lockfile --dev

ENV PORT 4000
EXPOSE $PORT 4000

# No src files are added to container here.
# Dockerfile is to be used with volume mounting from host via docker-compose or:
# docker run -v ./src:/app/src:ro

CMD [ "yarn", "start:dev" ]
