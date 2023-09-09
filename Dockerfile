FROM node:14 as build

WORKDIR /confectionary-frontend

COPY package*.json ./

ARG REACT_APP_API_URL = development
ENV REACT_APP_API_URL=${REACT_APP_API_URL}

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]