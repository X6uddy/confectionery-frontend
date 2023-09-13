FROM node:18
WORKDIR /confectionery-backend

COPY package*.json ./


ENV MONGODB_URI=somedefault

RUN npm install

COPY . .

EXPOSE 3004

CMD ["node", "index.js"]
