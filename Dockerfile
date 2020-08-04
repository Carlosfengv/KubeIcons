FROM node:12-alpine
RUN mkdir /KubeIcons
WORKDIR /KubeIcons
COPY . /KubeIcons
RUN yarn
EXPOSE 8000
CMD ["gatsby",  "develop"]