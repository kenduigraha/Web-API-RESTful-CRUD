# Web-API-Authentication-and-Authorization

## Introduction
Implement authentication and authorization web API using node.js and express framework and AJAX for client side

## How To Run Apps
> npm install

> npm start

> open localhost:3000 in browser

## Dependencies
1. node.js
2. express framework
3. nodemon
4. mongodb
5. mongoose

## How To Install Dependencies
1. express generator : ```express .```
2. nodemon : ```npm install --save-dev nodemon```
3. mongodb : ``` npm install --save mongodb```
4. mongoose : ``` npm install --save mongoose```

## Database's Structure

1. Database's name : db_memo
2. Collection's name : memos
3. Fields : content

## HTTP Routes
Default development host and port : http://localhost:3000

| Routes | HTTP | Action |
|--------|------|--------|
| /api/memos | GET | all memos |
| /api/memos | POST | process new memo |
| /api/memos/:id | PUT | process edit memo |
| /api/memos/:id | DELETE | process delete memo |

## package.json

```
{
  "name": "server",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "nodemon ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.15.1",
    "cookie-parser": "~1.4.3",
    "cors": "^2.8.1",
    "debug": "~2.2.0",
    "dotenv": "^2.0.0",
    "express": "~4.13.4",
    "jade": "~1.11.0",
    "mongodb": "^2.2.11",
    "mongoose": "^4.6.6",
    "morgan": "~1.7.0",
    "serve-favicon": "~2.3.0"
  },
  "devDependencies": {
    "nodemon": "^1.11.0"
  }
}

```

## App's Structure

```
.
├── README.md
├── client
│   ├── index.html
│   └── script
└── server
    ├── app.js
    ├── bin
    ├── controllers
    ├── models
    ├── node_modules
    ├── package.json
    ├── public
    ├── routes
    └── views

```


## Contributor
Ken Duigraha Putra &copy; 2016

## License
MIT
