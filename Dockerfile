FROM node:alpine
WORKDIR /app
ADD package.json /app/package.json
RUN npm install
ADD ng-src/dist /app/public
#ADD index.html /app/public/index.html # just for debugging
EXPOSE 8080
RUN apk add --no-cache curl && rm -rf /tmp/* /root/.npm
CMD ["npm", "start", "--", "--address", "0.0.0.0"]
