
#!/usr/bin/env bash
git pull origin master
docker build -t greenback-ui .
docker stop greenback-ui
docker run -p 5000:5000 -d greenback-ui