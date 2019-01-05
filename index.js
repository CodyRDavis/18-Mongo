const app = require('./server/app');

//initializing services
require('./api/v1/services');

//initializing routing
require('./api/v1/modules/article/article.routes');
require('./api/v1/modules/note/note.routes');