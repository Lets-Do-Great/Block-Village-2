FROM node:alpine
WORKDIR /app
RUN pwd
COPY ../package.json ./
RUN npm install --force
COPY ../ ./
RUN npm run build