const express= require('express')
const timer=require('./middleware/timer')

const app = express();
app.use(timer);
app.use(express.static('public'))
app.listen(5000,(err)=>{
    err?console.log(err):
    console.log("server is running!");
})