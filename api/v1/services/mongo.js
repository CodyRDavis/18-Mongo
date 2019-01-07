const mongoose = require('mongoose');

module.exports.initMongo = () => {

     mongoose.connect('mongodb://localhost:27017/hm18', { useNewUrlParser: true });
}