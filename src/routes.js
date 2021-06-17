const apiRoutes = (app)=>{
    app.use('/api/user', require ('./api/user'));
    app.use('/api/task', require ('./api/task'));
    app.use('/api/admin', require('./api/admin'))

    app.use('/task', require('./hbs-routes/task'))
    app.use('', require('./hbs-routes/admin'))
    app.use('/admin', require('./hbs-routes/admin'))
}


module.exports = {
    apiRoutes: apiRoutes
}