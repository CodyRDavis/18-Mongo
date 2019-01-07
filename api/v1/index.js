module.exports.initRouting = (app) => {
    require('./article/article.routes').initRoutes(app)
    require('./note/note.routing').initRoutes(app)
}