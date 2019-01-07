const express = require('express');
const app = express();

//MIDDLEWARE
require('./server/middleware').initMiddleWare(app);

//ROUTING
require('./api/v1/index').initRouting(app);

//SERVICES
require('./api/v1/services').initServices(app);


app.listen(3000, () => {
    console.log("EXPRESS SERVER: STARTED");
    console.log("SERVER LISTENING ON PORT: 3000");
})