module.exports.initServices = (app) => {
    require('./mongo').initMongo();
}