FROM node:22-alpine

WORKDIR /app

# MAKE A .dockerignore file to unstage the node_modules file.

# copying package file will add the optimization

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
RUN npm install


COPY . .


EXPOSE 3000

CMD ["node", "index.js"]

