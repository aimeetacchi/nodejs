const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

// public is where you store your css, js, images.
app.use(express.static('public'));

//set view engine to Jade (Static Templating)
// app.set('view engine', 'jade');
	
	//connection to DB
		var connection = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: 'password',
			database: 'catsgo'
		});

	connection.connect(function(err) {
			  if (err) throw err;
			  console.log('you have connected to the DB');
			});

app.use(bodyParser.json());

// Initialize routes
app.use('/api', require('./routes/api'));
	




// Run - node index.js in terminal ======

// app is listing on post 3000
app.listen(3000, function(){
	console.log('App is listening on port localhost:3000/api/cats');
});