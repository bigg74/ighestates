var express = require('express');
var app = express();
var port = 3000;

app.use(express.static('/var/www/ighestates'));

app.listen(port);
