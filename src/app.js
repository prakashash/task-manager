
require ('./db/mongoose');

const express = require ('express');
const app = express();
const path = require ("path");
const User = require ('./models/user');
const Task = require ('./models/task');
const Taskservice = require ('./api/task/task.service')
const Userservice = require ('./api/user/user.service')


const routes = require ('./routes')

const bodyParser = require('body-parser');
const userService = require('./api/user/user.service');

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())

routes.apiRoutes(app);

const publicDirPath = path.join(__dirname,'../public');
const viewPath = path.join(__dirname,'../template/views');
const partialPath = path.join(__dirname,'../template/partials');

app.use(express.static(publicDirPath));
app.set('view engine', 'hbs');
app.set('views', viewPath);




app.get('/task',(req,res)=>{
    
    Taskservice.getTask(req).then((taskArr)=>{
        res.render('task', {
            title : 'Task page',
            taskArr : taskArr
        })
    }).catch((err)=>{
        res.status(500).send('Unable to render page')

    })
})

app.get('/task/add', (req,res)=>{
    userService.getUser(req).then((user)=>{
        res.render('addTask',{
            user : user
        }).catch((err)=>{
            res.status(500).send('Unable to render page')
        })
    })
    
})

app.listen('8000', ()=>{
    console.log("connected")
})