FROM node:10

# Create app directory
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build

EXPOSE 5000
CMD [ "node", "serve.js" ]
