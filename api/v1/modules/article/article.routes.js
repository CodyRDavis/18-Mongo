const ctrl = require('./article.controller');
const axios = require('axios');
const cheerio = require('cheerio');

exports.initArticleRoutes = function (app) {

    app.get("/api/v1/article", (req, res, next) => {
        let body = req.body;
        console.log ("Article: Get");
        res.status(200).json({data: {}});
    });
    app.get("/api/v1/articles/refresh", (req,res, next) => {
        axios.get('https://www.npr.org/')
        .then((response)=>{
            if (response.status === 200) {
                const html = response.data;
                const $ = cheerio.load(html);
                const articleList = []
                $('.story-text')
                .each(function(i, element){
                    articleList[i] = {
                        title: $(this).find('h3.title').text().trim(),
                        link: $(this).find('a:nth-child(2)').attr('href'),
                        summary: $(this).find('p.teaser').text().trim()
                    }
                });

                //TODO ITERATE THROUGH ARRAY AND ADD IT TO MONGO
                res.status(200).json({data: articleList});
            }
        }, (error) => console.log(err) );
    });

    app.post('/api/v1/article', (req, res, next) => {
        let body = req.body;
        console.log ("Article: Post", body);
        res.status(200).json({data: {}});
    });

}