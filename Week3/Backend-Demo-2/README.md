1. Generate package.json
     npm init -y 
      then open package.json-->main==server.js
      "type" : "module"

 2. Create server.js

 3. install , import "express" and create Http Server. assign port

 ### Connect MongoDB database

       REST API     ------>mongodb native driver      ---->      Mongodb Server  
       REST API     ------>mongodb ODM tool (mongoose)     ----> Mongodb Server  

       a.Install mongoose and connect to mongodb server
       b.Create Schema of Resource
       c.Create Model of that Schema
       d.Perform DB operations on that Model