const mongoose = require ('mongoose');
const validator = require ('validator')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
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

UserSchema.pre('save', async function(){
    var user= this;
    if (user.password){
        user.password = await bcrypt.hash(user.password, 8)
    }
})

const User = mongoose.model('User',UserSchema);

module.exports = User;