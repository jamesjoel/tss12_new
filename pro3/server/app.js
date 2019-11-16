var express = require("express");
var app = express();
var path = require("path");

app.use(express.static(__dirname+"/dist/pro3"));


app.get("/", function(req,res){
    res.sendFile(__dirname+"/dist/pro3/index.html");
})


app.listen(3000, function(){
    // console.log(path.resolve());
    console.log("server running");
});