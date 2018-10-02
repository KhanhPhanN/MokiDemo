var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname ,"public")));

app.set("view engine","ejs");
app.set("views",path.join(__dirname, "views"));

var server  = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(8080);

var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
io.on("connection",function(socket){
console.log("ok");
// socket.on("gui-thong-tin",function(){
//     mongoClient.connect(url, function(err, db) {
//         if (err) throw err;
//         var dbo=db.db("mydb")
//         dbo.collection("SanPhamMayTinh").find().limit(8).toArray(function(err, result) {
//             if (err) throw err;
//           db.close();
//           socket.emit("render",result);
//         });
// });
// });
socket.on("gui-comment",function(data){
    io.sockets.emit("gui-comment",data);
})
});
app.get("/",function(req,res){
    mongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo=db.db("mydb");
        dbo.collection("SanPhamMayTinh").find().toArray(function(err, result1) {
            if (err) throw err;
        dbo.collection("SanPhamChuot").find().toArray(function(err, result2){
            if(err) throw err;
            db.close();
            res.render("homepage",{
                "MayTinh": result1,
                "Chuot": result2,
                "num1" : result1.length,
                "num2" : result2.length,
            });
        });
    });
       
});

});
app.get("/:id",function(req,res){
    var router = req.params.id;
    //router = new require('mongodb').ObjectID(router);
    var query = {name: router};
    mongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo.collection("SanPhamMayTinh").findOne(query,function(err, result) {
        if (result==null){
            dbo.collection("SanPhamChuot").findOne(query,function(err, result){
                res.render('template',{info: result, ten : "Chuot"});
            })
        }else{
            res.render('template',{info: result, ten: "MayTinh"}); 
        }
          db.close();
        
        });
});
});