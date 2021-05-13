const service = require ('./task.service');

const getTask = (req,res) =>{
    service.getTask(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const saveTask = (req,res) =>{
    service.saveTask(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const updateTask = (req,res) =>{
    service.updateTask(req).then((result)=>{
        res.status(200).send("Updeted");
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const deleteTask = (req,res) =>{
    service.deleteTask(req).then((result)=>{
        res.status(200).send("Deleted");
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

module.exports = {
    getTask: getTask,
    saveTask: saveTask,
    updateTask: updateTask,
    deleteTask: deleteTask

}