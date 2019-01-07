const db = require('./article.model');

const ctrl = {}

ctrl.newArticle = function(article){
    db.create(article, (response) => {
        console.log("Created new Article");
    });
}

module.exports = ctrl;


/*
const dice = {}
const db = require('./dice.model')

const crud = require('../crud')

dice.getDice = function () {
    crud.find(db, 'hello')

}
module.exports = dice; 
*/