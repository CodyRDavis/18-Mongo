const ctrl = require('./article.controller');

exports.initArticleRoutes = function (app) {

    app.get("/api/v1/article", (req, res, next) => {
        let body = req.body;
        console.log ("Article: Get");
        res.status(200).json({data: {}});
    });

    app.post('/api/v1/article', (req, res, next) => {
        let body = req.body;
        console.log ("Article: Post", body);
        res.status(200).json({data: {}});
    });

}