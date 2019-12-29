
#!/usr/bin/env bash
git pull origin master
docker stop greenback-ui
docker rm greenback-ui
docker build -t greenback-ui .
docker run -p 5000:5000 -d greenback-ui