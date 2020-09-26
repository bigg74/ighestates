var express = require('express');
var app = express();
var port = 3000;
var web_path = '/var/www/ighestates';

app.use(express.static(web_path));
app.set('views', app.set('port', web_path+'/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('*', function (req, res) {
  res.render(web_path + '/index.html');
});

app.listen( port, function() {
  console.log( 'Express server listening on port %d kinda fine like!', port );
});
