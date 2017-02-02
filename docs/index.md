# Dino

Dino is a distributed notification service intended to push events to groups of clients. Example use cases are chat 
server, real-time notifications for websites, push notifications for mobile apps, multi-player browser games, and more. 
Dino is unopinionated and any kind of events can be sent, meaning Dino only acts as the router of events between 
clients.

Any number of nodes can be started on different machines or same machine on different port. Flask will handle connection
 routing using either Redis or RabbitMQ as a message queue internally. An nginx reverse proxy needs to sit in-front of
 all these nodes with sticky sessions (`ip_hash`). Fail-over can be configured in nginx for high availability.

[![Dino Architecture](https://raw.githubusercontent.com/thenetcircle/dino/master/docs/dino-arch.png)](https://raw.githubusercontent.com/thenetcircle/dino/master/docs/dino-arch.svg)

## Requirements

Some package requirements (debian/ubuntu):

    $ sudo apt-get install libssl-dev libmysqlclient-dev libpg-dev
    TODO: more requirements...

Requires Python >=3.5. Download and install from source:

    $ wget https://www.python.org/ftp/python/3.5.2/Python-3.5.2.tar.xz
    $ tar -xvf Python-3.5.2.tar.xz
    $ cd Python-3.5.2/
    $ ./configure --prefix=/usr/local --enable-shared LDFLAGS="-Wl,-rpath /usr/local/lib"
    $ make
    $ sudo make altinstall
    $ sudo apt-get install virtualenv
    
TODO: check if docker could be useful: https://www.digitalocean.com/community/tutorials/docker-explained-how-to-containerize-python-web-applications

## Running the application

    $ cd dino/
    $ virtualenv --python=python3.5 env
    $ source env/bin/activate
    (env) $ pip install --upgrade .
    (env) $ ENVIRONMENT=prod gunicorn \
                --error-logfile ~/dino-gunicorn-error.log \
                --log-file ~/dino-gunicorn.log \
                --worker-class eventlet \
                --threads 1 \
                --worker-connections 5000 \
                --workers 1 \
                --bind 0.0.0.0:5210 \
                app:app
                
Add "--reload" during development.

## Load Balancing and Scaling

Example nginx configuration:

    upstream gridnodes {
        ip_hash;
    
        server some-ip-or-host-1:5210;
        server some-ip-or-host-2:5210;
        server some-ip-or-host-3:5210;
        server some-ip-or-host-4:5210;
        server some-ip-or-host-5:5210;
        server some-ip-or-host-6:5210;
        server some-ip-or-host-7:5210;
        server some-ip-or-host-8:5210;
    }
    
    map $http_upgrade $connection_upgrade {
        default upgrade;
        '' close;
    }
    
    server {
        listen 5200;
    
        location / {
            access_log on;
    
            proxy_pass http://gridnodes;
            proxy_next_upstream error timeout invalid_header http_500;
            proxy_connect_timeout 2;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    
            # WebSocket support (nginx 1.4)
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
        }
    }