const User = require('../../models/user');

const getUser = (req)=>{
    try{
        return User.find(req.query)
    }catch(err){
        throw Error(err)
    }
};

const saveUser = (req)=>{
    try{
        var user = new User(req.body)
        return user.save()
    }catch(err){
        throw new Error(err)
    }
};

const updateUser = (req)=>{
    try{
        return User.findByIdAndUpdate(req.params.id, req.body);
    }catch(err){
        throw new Error(err)
    }
};

const deleteUser = (req)=>{
    try{
        return User.findByIdAndDelete(req.params.id);
    }catch(err){
        throw new Error(err)
    }
};

module.exports = {
    getUser: getUser,
    saveUser: saveUser,
    updateUser: updateUser,
    deleteUser: deleteUser

}