FROM node:latest
WORKDIR /app/

COPY . .
WORKDIR /app/portfolio/
RUN npm i

EXPOSE 8080

CMD [ "/bin/bash" ]