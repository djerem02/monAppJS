var express = require('express');
var bodyParser = require('body-parser');
var fs = require("fs");
var path = require("path");

// Setup Express
var app = express();
app.use(express.static(__dirname+ 'public'));
app.use(bodyParser.urlencoded({extented: false}));
app.use(bodyParser.json());

var team = {
    "team4":{
        "nom" : "OL",
        "ville" : "Lyon",
        "classement" : "7",
        "id" : 4
    }
}




//GET method route
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.get('/listTeams',function(req,res){
    fs.readFile(__dirname+"/"+"teams.json",'utf8',function(err,data){
        console.log(data);
        res.end(data);
    });
});

app.get('/addTeam',function(req,res){
    //First read existing teams
    fs.readFile(__dirname + "/" + "teams.json",'utf8',function(err,data){
        data = JSON.parse(data);
        data["team4"]=team["team4"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})

app.get('/:id',function(req,res){
    //First read existing teams
    fs.readFile(__dirname + "/" + "teams.json",'utf8',function(err,data){
        teams = JSON.parse(data);
        var team = teams["team"+req.params.id];
        console.log(team);
        res.end(JSON.stringify(team));
    });
})

app.delete('/deleteTeam/:id',function(req,res){
    //First red existing teams
    fs.readFile(__dirname+"/"+"teams.json",'utf8',function(err,data){
        data = JSON.parse(data);
        var id = req.params.id;
        delete data["team"+id];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})





app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

// Start server
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Example app listening on port ' + port);
});