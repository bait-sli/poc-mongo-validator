A poc to demonstrate how to use object validation with Mongoose and MongoDB when create or update documents in database 

Run "docker-compose up --build" in main folder where docker-compose.yml is located

Access to localhost:8081 in browser to manage mongo database
Access to localhost:8080 to access server api with Postman
Start server with: cd server && npm run exec

Each part of application is deploy in his own docker container
to see the infra inside a container use

   docker ps // to see container ID of the target
   
   docker exec -it <container target> bash or sh // the last param depends on the OS present inside docker


