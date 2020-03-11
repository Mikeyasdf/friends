/*EJS = Embedded JavaScript 
    1. NodeJS looks for ejs files in "views"
    2. ejs files end with .ejs
    3. have to let NodeJS engine know we are using ejs
    allows for javascript and html at the same time
*/

var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("css"));

app.get('/', function(req, res){
    res.render("home");
});

var friendList = ["Alica", "Clark", "Carmelo", "Roober"];
app.get('/friends', function(req, res){
    res.render("friends", {friends: friendList});
});

app.post('/addfriend', function(req, res){
    var newfriend = req.body.newfriend;
    friendList.push(newfriend);
    res.redirect("/friends");
});

app.get('*', function(req, res){
    res.render("error");
});

app.listen(process.env.PORT,function(){
    console.log("Server is up and runnin");
});
