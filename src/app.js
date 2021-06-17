
require('./db/mongoose');

const express = require('express');
const app = express();
const hbs = require('hbs')
const bcrypt = require('bcryptjs')
const path = require("path");
const User = require('./models/user');
const Task = require('./models/task');
const cookieParser = require('cookie-parser');


const routes = require('./routes')

const bodyParser = require('body-parser');
const userService = require('./api/user/user.service');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

hbs.registerHelper('select', function(selected, options){
    return options.fn(this).replace(
        new RegExp (' value=\"' + selected +'\"'),
        '$& selected ="selected"')
})
app.use(cookieParser());

routes.apiRoutes(app);

const publicDirPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../template/views');
const partialPath = path.join(__dirname, '../template/partials');

app.use(express.static(publicDirPath));
app.set('view engine', 'hbs');
app.set('views', viewPath);


const test2 = async()=>{
    var password = "Ironman";
    var password2 = "tonystark";

    var hashedPass1 = await bcrypt.hash(password, 8);
    console.log("Hashed password1 is: ", hashedPass1)

    var hashedPass2 = await bcrypt.hash(password2, 8);
    console.log("Hashed password2 is: ", hashedPass2)

    var check = await bcrypt.compare(hashedPass2, hashedPass1);
    console.log("Cheked result is:", check)
}

var add = (x, y) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x + y)
        }, 3000)
    })
}

var sub = (x, y) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x - y)
        }, 3000)
    })
}

var mul = (x, y) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x * y)
        }, 3000)
    })
}

var divi = (x, y) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x / y)
        }, 3000)
    })
}

async function test() {
    try {
        var result1 = await add(2, 3);
        var result2 = await sub(result1, 3);
        var result3 = await mul(result2, 3);
        var result4 = await divi(result3, 3);
        console.log("result is:", result4)
    } catch (e) {
        console.log(e)
    }
}

test();
test2();

app.listen('8000', () => {
    console.log("connected")
})