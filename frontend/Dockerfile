
# Stage 1: Install dependencies and build the app
FROM node:16.13.0-alpine3.13 AS build

WORKDIR /app

COPY package.json /app/package.json

RUN npm install

RUN npm i react-router-dom
RUN npm i react-auth-kit
RUN npm i react-helmet
RUN npm i react-icons
RUN npm i react-redux
RUN npm i @reduxjs/toolkit
RUN npm i redux-persist
RUN npm i @mui/material
RUN npm i yup
RUN npm i formik
RUN npm i axios
RUN npm i react-rating-stars-component
RUN npm i @emotion/react
RUN npm i @emotion/styled
RUN npm i moment

RUN npm config set proxy http://localhost:5000


COPY . /app

EXPOSE 3000

CMD ["npm", "start"]
