const mongoose = require('mongoose');

const ArticleSchema = {
    title: String,
    link:String,
    image: String,
    summary: String
}

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;

/*
const mongoose = require('mongoose')

const Dice = mongoose.model('Dice', { name: String });

module.exports = Dice
*/