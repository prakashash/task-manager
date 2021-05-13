const getUser = (req,res) =>{
    res.status(200).send("GET USER")
}

const saveUser = (req,res) =>{
    res.status(200).send("POST USER")
}

const updateUser = (req,res) =>{
    res.status(200).send("UPDATE USER")
}

const deleteUser = (req,res) =>{
    res.status(200).send("DELETE USER")
}

module.exports = {
    getUser: getUser,
    saveUser: saveUser,
    updateUser: updateUser,
    deleteUser: deleteUser

}