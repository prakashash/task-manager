const service = require ('./admin.service');
const Admin = require ('../../models/admin')

const getAdmin = (req,res) =>{
    service.getAdmin(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const saveAdmin = (req,res) =>{
    service.saveAdmin(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const updateAdmin = (req,res) =>{
    service.updateAdmin(req).then((result)=>{
        res.status(200).send("Updeted");
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const deleteAdmin = (req,res) =>{
    service.deleteAdmin(req).then((result)=>{
        res.status(200).send("Deleted");
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const loginAdmin = async (req,res) =>{
    try{
        var admin = await Admin.findByCredential(req.body.email, req.body.password);
        var token = await admin.generateAuthToken();
        res.cookie("jwt", token, {
            expires : new Date (Date.now()+ 5000000),
            httpOnly: true
        });
        
        res.status(200).send({
            admin : admin,
            token: token
        })
    }catch(e){
        console.log(e)
        res.status(400).send("Unable to login");
    }
}

const logoutAdmin = (req, res)=>{
    res.clearCookie('jwt')
    res.status(200).send("SUCCESS")
}

const resetAdmin = async (req,res)=>{

    var admin = await Admin.findByCredential(req.body.email, req.body.oldPswd);

    if (!admin){
        res.status(404).send("Old password is incorrect");
        return;
    }

    service.resetAdmin(req).then((admin)=>{
        res.status(200).send("Reset password successful");
    }).catch((err)=>{
        console.log("Controller error----", err)
        res.status(500).send(err);

    })   
    
}


module.exports = {
    getAdmin: getAdmin,
    saveAdmin: saveAdmin,
    updateAdmin: updateAdmin,
    deleteAdmin: deleteAdmin,
    loginAdmin : loginAdmin,
    logoutAdmin : logoutAdmin,
    resetAdmin: resetAdmin

}