module.exports.initRouting = (app) => {
    require('./article/article.routes').initRoutes(app)
}