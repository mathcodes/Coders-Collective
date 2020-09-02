console.log("Starting:" + __filename);

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

//Creates an Express application. The express() function is a top-level function exported by the express module.
var app = express();
console.log("line 9:" + __filename);
//set port but allow others to work if port does not work
var port = process.env.PORT || 8090;

//(property) Application.use: (...handlers: RequestHandler<ParamsDictionary, any, any>[]) => Express (+4 overloads)
//Create a new middleware function to serve files from within a given root directory. The file to serve will be determined by combining req.url with the provided root directory. When a file is not found, instead of sending a 404 response, this module will instead call next() to move on to the next middleware, allowing for stacking and fall-backs.
app.use(express.static(process.cwd() + '/create'));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(methodOverride('_method'))

// Set Handlebars. exphbs stands for express-handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
}));
//Assign setting to val, or return setting's value. Application.set(setting: string, val: any)
app.set('view engine', 'handlebars');

// Import routes and give the server access to them.
var routes = require('./controllers/coders_controller.js');

app.use('/', routes);
// Start our server so that it can begin listening to client requests.
app.listen(port);
// Log (server-side) when our server has started
console.log("Server listening on: http://localhost:" + port);

console.log("Ending:" + __filename);