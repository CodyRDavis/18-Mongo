const app = require('./server/app');

//initializing services
    //in this instance starts mongo
require('./api/v1/services');

//initializing routing
require('./api/v1/modules/article/article.routes').initArticleRoutes(app);
//require('./api/v1/modules/note/note.routes').initNoteRoutes(app);
require('./server/server').initServer(app);