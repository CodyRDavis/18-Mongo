//DEPENDENCIES FOR SERVER
const express = require("express");
const mongojs = require("mongojs");

//DATABASE CONFIG
const databaseUrl = "news";
const collections = "articles";

//const db = require("./models");

//MIDDLEWARE
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

//ROUTING
const routes = require('./routes');
app.use(function(req,res){
    console.log(req.method, req.url);
    next();
})
app.use('/', routes);

//START SERVER
app.listen(3000, function() {
    console.log("App running on port 3000");
})