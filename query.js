var express = require('express')
var app = express()

 app.get('/search', function(req, res){
      var content = req.query;
     res.send(content)
     
 });


app.listen(process.argv[2])
