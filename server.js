//Install express server
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 8080);

app.get('/*', function(req, rest) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));

})

console.log('Console listening!');