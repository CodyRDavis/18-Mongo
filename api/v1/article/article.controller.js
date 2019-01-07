const db = require('./article.model');

const ctrl = {}

ctrl.newArticle = function(article){
    db.create(article, (response) => {
        console.log("Created new Article");
    });
}

module.exports = ctrl;