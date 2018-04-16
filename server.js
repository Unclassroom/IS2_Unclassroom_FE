//Install express server
const express = require('express');
const app = express();
var port = process.env.PORT || 8000

// Serve only the static files form the dist directory
var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
   // configure stuff here
    app.use(express.static(__dirname + '/'));   
} else {
    app.use(express.static(__dirname + '/'));
}
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);