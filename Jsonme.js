var express = require('express')
var app = express();
var fs = require('fs');

app.get('/books', function(req, res){
  var filename = process.argv[3]
  fs.readFile(filename, function(error, data) {
    if (error) return res.sendStatus(500)
    else {
      res.json(JSON.parse(data))
    } 
   
  })
})
