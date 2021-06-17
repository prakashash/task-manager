const jwt = require ('jsonwebtoken');
const Admin = require('../models/admin')

const auth = async(req, res, next)=>{
    try{
        // var token = req.header('Authorization').replace('Bearer ', '')
        var token = req.cookies.jwt;
        var decoded = jwt.verify(token, 'gtcproject');
        const admin = await Admin.findById(decoded._id);
        if(!admin){
            res.status(400).send('Unauthorized')
            return;
        }

        req.body.admin = admin;
        
        next();

    }catch(e){
        res.status(400).send('Unauthorized')
        console.log('error', e)
    }
}

module.exports = auth