# Build stage
FROM node:18.13.0 AS build
WORKDIR /app 
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:14-alpine
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY package*.json ./
RUN npm install --only=production

CMD ["npm", "start"]