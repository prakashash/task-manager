
require ('./db/mongoose');

const express = require ('express');
const app = express();
const User = require ('./models/user');
const Task = require ('./models/task');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())

app.post('/api/user',(req,res)=>{

    var user = new User(req.body);
    user.save().then((user)=>{
        res.status(201).send({
            user:user
        })
    }).catch((err)=>{
        res.status(500).send(err);
    })
})

app.post('/api/task',(req,res)=>{

    var task = new Task(req.body);
    task.save().then((task)=>{
        res.status(201).send({
            task:task
        })
    }).catch((err)=>{
        res.status(500).send(err);
    })
})

app.get('',(req,res)=>{
    res.send({
        "title":"task"
    })
})

app.listen('8000', ()=>{
    console.log("connected")
})