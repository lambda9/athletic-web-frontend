FROM node:lts-alpine AS BUILDER

WORKDIR /app
COPY package-lock.json .
COPY package.json .
RUN npm install
COPY . .
RUN npm run-script build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=BUILDER /app/build .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]