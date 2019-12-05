var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var MongoClient = require("mongodb").MongoClient;
var dbUrl = "mongodb://localhost:27017";
var jwt = require("jsonwebtoken");
var mongo = require("mongodb");

var dbName = "tss12";
var tblName = "user";

app.use(bodyParser());
app.use(cors());


app.post("/api/signup", function(req, res){
    MongoClient.connect(dbUrl, function(err, client){
        var db = client.db(dbName);
        db.collection(tblName).insert(req.body, function(err, result){
            console.log(result);
            res.send(result.ops[0]);
        }); 
    }); 

});

app.post("/api/user/usernamecheck", function (req, res) {
    // console.log(req.body);
    MongoClient.connect(dbUrl, function (err, client) {
        var db = client.db(dbName);
        db.collection(tblName).find({ username : req.body.username }).toArray(function(err, result){
            if(result.length>0){
                res.send(false);
            }
            else{
                res.send(true);
                
            }
        });
    });

});


app.post("/api/user/auth", function(req, res){
    MongoClient.connect(dbUrl, function(err, client){
        var db = client.db(dbName);
        db.collection(tblName).find({ username : req.body.username}).toArray(function(err, result){
            if(result.length >= 1)
            {
                if(result[0].password == req.body.password)
                {
                    var token = jwt.sign({ id : result[0]._id, name : result[0].full_name}, "this is my secret key", { expiresIn : 3600});
                    res.status(200).send({
                        success : true,
                        token
                    });
                }
                else
                {
                    res.status(401).send({
                        success: false,
                        msg: "This Password is Incorrect"
                    });
                }
            }
            else{
                res.status(401).send({
                    success : false,
                    msg : "This Username and Password is Incorrect"
                });
            }
        });
    });
});


app.get("/api/user/getuser", verifyToken, function(req, res){
    // console.log(req.userData);
    MongoClient.connect(dbUrl, function(err, client){
        var db = client.db(dbName);
        db.collection(tblName).find({ _id : mongo.ObjectId(req.userData.id)}).toArray(function(err, result){
            res.status(200).send(result[0]);
        });
    })
});


app.put("/api/user/getuser/:id", verifyToken, function (req, res) {
    // console.log(req.userData);
    // console.log(req.params);
    // console.log(req.body);
    MongoClient.connect(dbUrl, function (err, client) {
        var db = client.db(dbName);
        delete req.body._id;
        db.collection(tblName).update({ _id: mongo.ObjectId(req.params.id) }, { $set : req.body }, function (err, result) {
            console.log(result);
            res.status(200).send(result);
        });
    })
});


function verifyToken(req, res, next){
    // console.log(req.headers);
    if (!req.headers.authorization){
        res.status(401).send({ msg : "Unautorized User"});
    }
    else{
        if (req.headers.authorization =="")
        {
            
            res.status(401).send({ msg : "Unautorized User"});
        }
        else
        {
            var token = req.headers.authorization;
            var payload = jwt.verify(token, "this is my secret key");
            if(! payload){
                
                res.status(401).send({ msg : "Unautorized User"});
            }
            else
            {
                req.userData = payload;
                next();
            }
        }
    }
    
}


app.listen(3000, function(){
    console.log("Server Running");
});