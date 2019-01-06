const ctrl = require('./article.controller');
const mongoose = require('mongoose');
const db = require('../../services/index');
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
        .then( (response) => {
            console.log("got response from axios");
            if (response.status === 200) {
                const html = response.data;
                const $ = cheerio.load(html);
                const Article = mongoose.model('Article');
                const articleList = []
                $('.story-wrap')
                .each(function(i, element){
                    result = {
                        title: $(this).find('h3.title').text().trim(),
                        link: $(this).find('a:nth-child(2)').attr('href'),
                        summary: $(this).find('p.teaser').text().trim(),
                        image: $(this).find('img').attr('src')
                    }

                    //checking to make sure all info on article needed is available.
                    //creating new article in the DB if true.
                    if (result.title && result.link && result.summary && result.image){
                        Article.create(result)
                            .then((dbArticle) => {
                                console.log(dbArticle);
                            })
                            .catch ((err) => {
                                console.log(err);
                            })
                    }
                });

                //TODO ITERATE THROUGH ARRAY AND ADD IT TO MONGO
                res.status(200).json({data: 'scraped!'});
            }
        }, (error) => console.log(err) );
    });

    app.post('/api/v1/article', (req, res, next) => {
        let body = req.body;
        console.log ("Article: Post", body);
        res.status(200).json({data: {}});
    });

}