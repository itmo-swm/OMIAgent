FROM node
RUN mkdir /app
WORKDIR /app
COPY node/package.json /app
RUN npm install
COPY node /app
EXPOSE 8080 4040 3000
ENTRYPOINT sleep 10 && node index.js
