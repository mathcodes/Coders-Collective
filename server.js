var express = require("express");
// var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

//app.use (MIDDLEWARE... code that is going to run before it hits your route, hence before lines 19 and 20)
//urlencoded (%20 > space), browser encodes it into appropriate format
//% characters means browser has encoded it
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//converts JSON which has been converted into pockets that can be sent into air back into JSON
//express.json passes an objects with methdso and properties, hence dot.

//lines 13 and 15 MUCH GO BEFORE ROUTES

//express.static is IMPORTANT when sending html code from backend, you have html routes, then you also need front end code in public folder... when you send the html and it requires other files, then you need to use express.static to send the other files along with it
//goin
//LINES 22 NEEDS TO GO BEFORE the routes
app.use(express.static(path.join(__dirname, 'public')));

//requiring a function and calling the fucntion, requiring the function and passing app as an argument
//wherever you have a require
//require("./routes/apiRoutes.js"); is as if I take the entire function and pasting it here. It looks for module.exports
//(app) calls the function and passing the paramter (app) and on the server we are passing the app as an argument.

// require("./routes/apiRoutes.js")(app);
// require("./routes/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: http://localhost:" + PORT);
});