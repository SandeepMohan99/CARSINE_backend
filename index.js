
/* import dotenv */
/* loads .env file contents in to process.env by default */
require('dotenv').config()

/* import express -to create server*/
const express = require('express')

/* import cors for communication between front end and backend*/
const cors = require('cors')

/*import router*/
const router = require('./Router/router')

/* import connection.jsfile*/
require('./DB/connections')

/* create a server  */
/* Creates an Express application. The express() function is a top-level function exported by the express module. */
const myServer = express()

/* server uses cors */
myServer.use(cors())

/* data from frontend will be json it should be converted to javascript object */
/* to convert it it should be parsed to parse we use  */
/* Returns middleware that only parses json and only looks at requests */
myServer.use(express.json())

//myServer.use(express.urlencoded({extended:false}))

/* use router */
myServer.use(router)

/* create port */
const port = 5000 || process.env.PORT

myServer.listen(port,()=>{
    console.log(`Server is running successfully at port ${port}`);
})


/* get http request */
myServer.get('/',(req,res)=>{
    res.send(`<h1>Project Server is running successfully and waiting for request</h1>`) 
})
