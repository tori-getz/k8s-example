FROM node:16-alpine as builder

WORKDIR /app

COPY . .

RUN yarn --frozen-lockfile

RUN yarn build

FROM nginx:latest as production

ENV NODE_ENV production

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
