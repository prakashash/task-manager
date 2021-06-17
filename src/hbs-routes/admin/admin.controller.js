const LoginAdmin = (req, res)=>{
    res.render('login')
};

const RegAdmin = (req, res)=>{
    res.render('reg')
};

const resetAdmin = (req, res)=>{
    res.render('reset',{
        admin: req.body.admin
    })
}

module.exports = {
    LoginAdmin: LoginAdmin,
    RegAdmin: RegAdmin,
    resetAdmin: resetAdmin   
}