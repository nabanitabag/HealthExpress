const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req, resp){
  resp.sendFile(__dirname + "/index.html");
});

app.post("/",function(req, resp){
  console.log(req.body);
  var result = Number(req.body.num1) + Number(req.body.num2);
  resp.send("Thanks for posting. The result of your stupid numbers is " + result);
});

app.listen(3000, function(){
  console.log("Server running");
});
