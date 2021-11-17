# Scratch Tutorials

## What is it?

Scratch tutorials is a website for tutorials about [scratch](https://scratch.mit.edu).
I got the idea from [FlagClicked](https://github.com/FlagClicked/FlagClicked), but that
project is not in active development as of now.

## Installation
Make sure you have [node](https://nodejs.org/en/) and [mongodb](https://www.mongodb.com/) installed.
If you want you can use [mongodb atlas](https://www.mongodb.com/atlas) if you don't want to install mongo.

Run:
```bash
git clone https://github.com/Tallented-Code-bot/scratch_tutorials/
cd scratch_tutorials
npm install
```

Then create `server/config.js`  with these contents:
```js
const config={};

//specify the port you want it to listen on here
config.listen_port=3390 

//This is the ip to listen on.  0.0.0.0 will listen on all ips on your network, meaning
//that you can connect from any device on your network.
config.listen_ip="0.0.0.0" 


config.db={};

//User of your database
config.db.user=<Database user>;

//database user password
config.db.password=<Database user password>;

//this is the database that will be used; you can change it if you want
config.db.db="scratch_tutorials";

//replace this with your connection string
config.db.connectionString=<Mongodb connection string>

module.exports=config;
```


#### Running the frontend

```
npm run start
```

#### Running the backend

```
node server/index.js
```

#### Running everything

```
npm run build
node server/index.js
```

Then go to http://localhost:3000/ to see it.

## Features

- [x] Tutorial creation and deletion
- [ ] User authentication
- [x] Basic markdown syntax
- [x] Scratch blocks in markdown
- [ ] Comments
- [ ] Up voting tutorials
