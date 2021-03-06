// const routes = module.exports = require('next-routes');

// module.exports = routes()
//     .add("article", "/article/:slug")
//     .add('/campaigns/:address', 'campaigns/show');
    

//const routes = module.exports = require('next-routes')();
const routes =  require('next-routes')();

routes
    .add('/campaigns/new', '/campaigns/new')
    .add('/campaigns/:address', '/campaigns/show')
    .add('/campaigns/:address/requests', '/campaigns/requests/index')
    .add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
    
    