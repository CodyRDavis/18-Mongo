const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.status(200).json({
        message: 'Connected!',
        errors: []
    });
});

routes.get('/api/articles', (req,res) =>{
    res.status(200).json({
        message: 'api',
        errors: []
    });
});

routes.get("*", (req, res)=>{
    res.status(400).json({
        message:"ERROR",
        errors:["404: Page not Found"]
    });
});

module.exports = routes;