FROM node:18-alpine
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm i
COPY . .
RUN npm run build

COPY .next ./.next

ENTRYPOINT ["npm", "start"]