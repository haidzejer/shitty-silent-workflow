var express = require("express")
var app = express()

app.get('/', function(req, res) {
  res.send("This is the home page")
})

app.listen(3000, function () {
  console.log("Listening on port 3000.");
})
