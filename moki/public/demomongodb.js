// function Data(){
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
// var Inf = [];
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var ten = {name: "Máy tính ASUS chuyên game"};
//   dbo.collection("SanPham").find(ten).toArray(function(err, result) {
//     if (err) throw err;
//     for(var i=0;i<result.length;i++)
//     Inf.push(result[i].name);
//     Inf.push(result[i].price);
//     Inf.push(result[i].shop);
//     Inf.push(result[i]._id);
//     Inf.push(result[i].date);
//     Inf.push(result[i].state);
//     Inf.push(result[i].list_attached);
//     db.close();
//   });
// });
// return Inf;
// }