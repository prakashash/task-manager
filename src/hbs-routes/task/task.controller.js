const Taskservice = require('../../api/task/task.service');
const Userservice = require('../../api/user/user.service');


const getTask = (req, res) => {

    Taskservice.getTask(req).then((taskArr) => {
        res.render('task', {
            title: 'Task page',
            taskArr: taskArr
        })
    }).catch((err) => {
        console.log("===========", err)
        res.status(500).send('Unable to render page')

    })
}

const addTask = (req, res) => {
    Userservice.getUser(req).then((user) => {
        res.render('addTask', {
            user: user
        })
    }).catch((err) => {
        res.status(500).send('Unable to render page')

    })

}

const editTask = async (req, res) => {

    try {
        var user = await Userservice.getUser(req)
        var task = await Taskservice.getTaskById(req)
        res.render('addTask', {
            title: 'Edit task',
            task: task,
            user: user
        })

    } catch (err) {
        console.log(err)
        res.status(500).send('Unable to render page')
    }
}

module.exports = {
    getTask: getTask,
    addTask: addTask,
    editTask: editTask
}
