var express = require('express');
var home = require('../app/routes/home');
module.exports = function(){
	var app = express();
	//Mudança no parâmetro PORT para publicar no Heroku
	app.set('port', process.env.PORT || 3000);
	//Middleware
	app.use(express.static('./public'));
	app.set('view engine', 'ejs');
	app.set('views', './app/views');
	home(app);
	return app;
};