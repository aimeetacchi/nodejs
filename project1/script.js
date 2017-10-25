const express = require('express');
var mysql = require('mysql');
var app = express();

// public is where you store your css, js, images.
app.use(express.static('public'));

//set view engine to Jade (Static Templating)
app.set('view engine', 'jade');

// connection to DB
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'sampleDB'
});


// Get HTTP -
app.get('/', function(req, res) {

		connection.connect(function(err) {
			  if (err) {
			    console.error('error connecting: ' + err.stack);
			    return;
			  }
			 
			  console.log('connected as id ' + connection.threadId);
			});

			connection.query("SELECT * FROM myTable", function(err, row, fields){
			if(!!err) throw err;

			console.log('Successful query');
		})
		connection.end();
			//__dirname is a node API, gets your root directory.
		// res.sendFile(__dirname + '/index.html');

		res.render('index', { title: 'My Title', message: 'Hello World, This is my app!'});
});


// app is listing on post 8000
app.listen(8000, function(){
	console.log('App is listening on port localhost:8000');
});