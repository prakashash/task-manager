const mongoose = require ('mongoose');
const validator = require ('validator')
const bcrypt = require('bcryptjs')
const jwt = require ('jsonwebtoken')

const AdminSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true,
        trim : true
    },

    email:{
        type : String,
        required : true,
        trim : true,
        unique : true,
        lowerCase : true,
        validate : function(value){
            if(!validator.isEmail(value)){
                throw new Error ('please enter valid email')
            }
        }
    },
    password:{
        type : String,
        required : true,
        trim : true,
        minlength : 8,
        validate : function(value){
            if(value.includes('password')){
                throw new Error ('password should not contain password')
            }
        }
    }
},{
    timestamps : true

});

AdminSchema.pre('save', async function(){
    var admin= this;
    if (admin.password){
        admin.password = await bcrypt.hash(admin.password, 8)
    }
})

AdminSchema.statics.findByCredential = async(email,password)=>{
    var admin = await Admin.findOne({email:email});
    if(!admin){
        throw new Error ('Unable to login')
    }
    var check= await bcrypt.compare(password, admin.password);
    if(!check){
        throw new Error('Unable to login')
    }
    return admin;
}

AdminSchema.methods.generateAuthToken = function(){
    var admin = this;
    var token = jwt.sign({_id : admin._id}, 'gtcproject')
    return token;
}

const Admin = mongoose.model('Admin',AdminSchema);

module.exports = Admin;