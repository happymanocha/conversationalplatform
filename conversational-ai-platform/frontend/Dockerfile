FROM node:20-alpine
WORKDIR /app
COPY package.json tsconfig.json index.html ./
RUN npm install && npm cache clean --force
COPY src ./src
RUN npm run build
CMD ["npx", "serve", "dist"]
