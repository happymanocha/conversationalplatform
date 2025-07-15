FROM node:20-alpine
WORKDIR /app
COPY package.json tsconfig.json jest.config.js ./
RUN npm install --production=false && npm cache clean --force
COPY src ./src
COPY test ./test
RUN npm run build
CMD ["npm", "start"]
