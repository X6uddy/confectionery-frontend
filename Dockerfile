FROM node:18 as build

WORKDIR /confectionery-frontend

COPY package*.json ./

ARG REACT_APP_API_URL=development

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine
#static files
COPY pictures /usr/share/nginx/html/pictures
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /confectionery-frontend/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
