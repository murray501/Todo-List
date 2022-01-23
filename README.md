# Todo List
Editable Todo list
  1. Add Todo
  2. Edit Todo
  3. Delete Todo
  4. Check Complete or Not Complete
  5. Show all or complete or not complete list

## How to run ?
### Install mongoDB
  1. sudo apt update
  2. wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
  3. echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
  4. sudo apt-get update
  5. sudo apt-get install -y mongodb-org
  6. mongod --version

### Add Init List (MongoDB)
  1. https://raw.githubusercontent.com/mongodb/mongo/master/debian/init.d | sudo tee /etc/init.d/mongodb >/dev/null
  2. sudo chmod +x /etc/init.d/mongodb
  3. sudo service mongodb start
  4. mongo --eval 'db.runCommand({ connectionStatus: 1 })'

### Start server
  1. cd server
  2. npm install
  3. npm start -> server run (http://localhost:4000)

### Start Client
#### React version
  1. cd client
  2. npm install
  3. npm start -> client run (http://localhost:3000)
#### NextJS version
  1. cd client-next
  2. npm run dev -> client run (http://localhost:3000)

## What are implemented?

### Server
  1. graphQL -> use apollo-server
  2. mongodb -> for data storage

### Client
  1. graphQL -> use appllo-client
  2. react
  3. nextjs
  4. bulma -> for CSS
  
  
  


  

