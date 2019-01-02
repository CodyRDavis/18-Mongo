const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: String,
    link: String,
    note: { type: Schema.Types.ObjectId, ref: "Note"}
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;