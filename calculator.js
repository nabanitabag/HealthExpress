const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req, resp){
  resp.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator",function(req, resp){
  resp.sendFile(__dirname + "/BMIcalculator.html");
});

app.post("/bmicalculator",function(req, resp){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi =  weight/ (height *height);
  if(bmi <18.5)
  {
    resp.send("Your BMI is " + bmi +". You are probably underweight.");
  }
  else if(bmi >= 18.5 && bmi<=24.9)
  {
    resp.send("Your BMI is " + bmi +". You are probably normal.");
  }
  else if(bmi >= 25 && bmi<=29.9)
  { 
    resp.send("Your BMI is " + bmi +". You are probably overweight.");
  }
  else if(bmi >= 30)
  { 
    resp.send("Your BMI is " + bmi +". You are probably obese.");
  }
});

app.post("/",function(req, resp){
  console.log(req.body);
  var result = Number(req.body.num1) + Number(req.body.num2);
  resp.send("Thanks for posting. The sum of your numbers is " + result);
});

app.listen(3000, function(){
  console.log("Server running");
});
