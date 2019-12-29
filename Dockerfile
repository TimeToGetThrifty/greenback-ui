FROM node:10

# Create app directory
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm install -g serve
RUN npm run build

EXPOSE 5000
CMD [ "serve", "-s", "build", "-l", "5000" ]
