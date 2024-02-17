const express = require('express')
require('dotenv').config();
const { db1, db2, db3 } = require('./config/database')
const app = express();

db1.authenticate().then(()=>{
    console.log('connected with db 1')
}).catch((err)=>{
    console.log('here is error')
})
db2.authenticate().then(()=>{
    console.log('connected with db 2')
}).catch((err)=>{
    console.log('here is error')
})
db3.authenticate().then(()=>{
    console.log('connected with db 3')
}).catch((err)=>{
    console.log('here is error',err)
})


const { PORT } = process.env

app.listen(PORT, () => {
    console.log(`Server is up and running on port : 8080`)
});
