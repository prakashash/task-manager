const Admin = require('../../models/admin');
const bcrypt = require('bcryptjs')

const getAdmin = (req)=>{
    try{
        return Admin.find(req.query)
    }catch(err){
        throw Error(err)
    }
};

const saveAdmin = (req)=>{
    try{
        var admin = new Admin(req.body)
        return admin.save()
    }catch(err){
        throw new Error(err)
    }
};

const updateAdmin = (req)=>{
    try{
        return Admin.findByIdAndUpdate(req.params.id, req.body);
    }catch(err){
        throw new Error(err)
    }
};

const deleteAdmin = (req)=>{
    try{
        return Admin.findByIdAndDelete(req.params.id);
    }catch(err){
        throw new Error(err)
    }
};

const resetAdmin = async (req)=>{
    try{
        var newPassword = await bcrypt.hash(req.body.password, 8);
        return Admin.findByIdAndUpdate(req.body.admin._id, {
            password : newPassword
        })
    }catch(err){
        console.log("Error------", err)
        throw new Error(err)
    }
 
}


module.exports = {
    getAdmin: getAdmin,
    saveAdmin: saveAdmin,
    updateAdmin: updateAdmin,
    deleteAdmin: deleteAdmin,
    resetAdmin: resetAdmin
}