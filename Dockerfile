FROM node:6

RUN npm install -g typings webpack-dev-server rimraf webpack
RUN npm install -g karma protractor typescript
# Install app dependencies
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

# Bundle app source
WORKDIR /opt/app

EXPOSE 3000
EXPOSE 3001
CMD [ "npm", "start" ]
