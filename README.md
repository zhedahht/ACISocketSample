# Socket Connections in Azure Container Instances

This sample is a very simple NodeJS application used to demonstrate [Azure Container Instances](https://azure.microsoft.com/services/container-instances/).

The file ./SocketServer/app/server.js defines a socket server, which listens on the port 1337 of localhost. The Docker image is [containerinstance/socket-server](https://hub.docker.com/r/containerinstance/socket-server/).

The file ./SocketClient/app/client.js defines a socket client, which connects to the port 1337 of localhost. The client create 200 connections concurrently in every 10 seconds. The Docker is [containerinstance/socket-client](https://hub.docker.com/r/containerinstance/socket-client/)

If you are going to deploy the socket server and client in Azure Container Instance, you may take the file ./ACI/Properties.json as reference for container instance definition.