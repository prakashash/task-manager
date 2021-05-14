const service = require ('./user.service');

const getUser = (req,res) =>{
    service.getUser(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const saveUser = (req,res) =>{
    service.saveUser(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const updateUser = (req,res) =>{
    service.updateUser(req).then((result)=>{
        res.status(200).send("Updeted");
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const deleteUser = (req,res) =>{
    service.deleteUser(req).then((result)=>{
        res.status(200).send("Deleted");
    }).catch((err)=>{
        res.status(500).send(err);

    })
}


module.exports = {
    getUser: getUser,
    saveUser: saveUser,
    updateUser: updateUser,
    deleteUser: deleteUser

}