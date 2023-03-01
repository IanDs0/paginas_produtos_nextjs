FROM node:18.14.2-alpine
ENV NODE_ENV=production
WORKDIR /app
RUN npm install -g npm@9.5.1
RUN npm install yarn
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent
COPY . .
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]
