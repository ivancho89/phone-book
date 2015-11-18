var express = require('express');
var serveStatic = require('serve-static');
var path = require('path');
 
var app = express()
 
app.use(serveStatic('app', {'index': ['index.html', 'index.htm']}))
app.use(express.static(path.join(__dirname, 'app')));

app.listen(1339)