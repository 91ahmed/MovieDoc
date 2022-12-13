const fs = require('fs')

exports.index = (req, res) => 
{
    res.render('app/auth')
}

exports.register = (req, res) =>
{
    res.send(req.body)
}

exports.login = (req, res) =>
{
    
}