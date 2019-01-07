const ctrl = require('./article.controller');
const axios = require ('axios');
const cheerio = require ('cheerio');

module.exports.initRoutes = (app) => {
    console.log("Initilizing Article Routes");
    app.get('/api/v1/articles', (req, res, next) => {

        const articleList = [];

        axios.get("https://www.npr.org/").then( (response) => {
            if (response.status === 200) {
                const html = response.data;
                const $ = cheerio.load(html);
                $('.story-wrap')
                .each(function(i, element){
                    result = {
                        title: $(this).find('h3.title').text().trim(),
                        link: $(this).find('a:nth-child(2)').attr('href'),
                        summary: $(this).find('p.teaser').text().trim(),
                        image: $(this).find('img.img').attr('src')
                    }
                    articleList[i]=result;
                });
            }
            res.json({data: articleList});
        });
    });
    app.post('/api/v1/articles/', function (req,res, next) {
        const article = req.body;

        if(article.title && article.link && article.summary && article.image){
            console.log("I SHOULD CREATE A NEW ARTICLE IN THE DB");
            ctrl.newArticle({
                title: article.title,
                link: article.link,
                image: article.image,
                summary: article.summary
            });
        }

        res.status(200).json({data: "article saved"});

    })
}