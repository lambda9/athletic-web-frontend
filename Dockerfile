FROM node:lts-alpine as BUILDER

WORKDIR /app
COPY package-lock.json .
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=BUILDER /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]

