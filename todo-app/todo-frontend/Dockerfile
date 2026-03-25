# Base stage
FROM node:20 AS base
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

# Test stage
FROM base AS test
COPY . .
RUN npm run test

# Build stage
FROM base AS build
COPY . .
ENV VITE_BACKEND_URL=http://localhost:3000
RUN npm install -g serve
RUN npm run build

EXPOSE 5000
CMD ["serve", "dist", "-p", "5000"]