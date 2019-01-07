const express = require('express')
const path = require('path')
module.exports.initMiddleWare = (app) => {
    //middleware - require initMiddleWare
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static(path.join(__dirname, '/dist')));
    app.use(express.json())

}