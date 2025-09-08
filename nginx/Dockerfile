FROM nginx:latest

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y openssl sudo

RUN mkdir -p /etc/nginx/ssl
RUN openssl genrsa 2048 > /etc/nginx/ssl/nginx.key && \
    openssl req -subj '/CN=/O=/C=' -new -key /etc/nginx/ssl/nginx.key -out /etc/nginx/ssl/nginx.csr && \
    openssl x509 -req -days 365 -in /etc/nginx/ssl/nginx.csr -signkey /etc/nginx/ssl/nginx.key -out /etc/nginx/ssl/nginx.crt 

COPY ./nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]