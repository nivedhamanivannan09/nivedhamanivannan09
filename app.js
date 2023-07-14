const app = require('express')()
require('./arithmetic')
const port = 2010
app.listen (port,()=>
{
    console.log(`server listen on : ${port}`)
})