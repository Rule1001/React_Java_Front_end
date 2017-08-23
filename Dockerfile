FROM java:8u111-jdk-alpine
ADD target/*.jar app.jar
RUN sh -c 'touch /app.jar'
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]


# FROM node:6.10-alpine
# RUN mkdir -p /home/web
# COPY *.html /home/web/
# COPY public /home/web/public/
# COPY src /home/web/src/
# COPY *.json /home/web/
# WORKDIR "/home/web"
# RUN npm install
# ENTRYPOINT webpack-dev-server