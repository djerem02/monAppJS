var express = require('express');
var bodyParser = require('body-parser');
var path = require("path");

// Setup Express
var app = express();
app.use(express.static(__dirname+ 'public'));
app.use(bodyParser.urlencoded({extented: false}));
app.use(bodyParser.json());




//GET method route
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.get('/:teamnum', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Vous êtes dans la team  n°' + req.params.teamnum);
});

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

// Start server
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Example app listening on port ' + port);
});