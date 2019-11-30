var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var MongoClient = require("mongodb").MongoClient;
var dbUrl = "mongodb://localhost:27017";

app.use(bodyParser());
app.use(cors());


app.post("/api/signup", function(req, res){
    MongoClient.connect(dbUrl, function(err, client){
        var db = client.db("tss12");
        db.collection("user").insert(req.body, function(err, result){
            console.log(result);
            res.send(result.ops[0]);
        }); 
    }); 

});

app.post("/api/user/usernamecheck", function (req, res) {
    MongoClient.connect(dbUrl, function (err, client) {
        var db = client.db("tss12");
        db.collection("user").find({ username : req.body.username }).toArray(function(err, result){
            if(result.length){
                return false;
            }
            else{
                return true;
            }
        });
    });

});



app.listen(3000, function(){
    console.log("Server Running");
});