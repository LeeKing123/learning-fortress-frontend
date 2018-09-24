// A
//Install express server
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/learning-fortress-frontend'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/learning-fortress-frontend/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
console.log('Listening on port %s', process.env.PORT || 8080);