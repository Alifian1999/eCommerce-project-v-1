const {Pool} = require ('pg')
const db = new Pool({
    host:'localhost',
    user:'postgres',
    password:'ip0369751399',
    database:'web_development',
    port:5432
})

module.exports=db