FROM node:6

RUN npm install -g typings webpack-dev-server rimraf webpack
RUN npm install -g karma protractor typescript
# Share app dependencies

# Bundle app source
WORKDIR /opt/app

EXPOSE 3000
EXPOSE 3001
CMD [ "npm", "start" ]
