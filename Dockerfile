
FROM node:17.3.0

WORKDIR /jenkins
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "start"]