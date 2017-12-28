const express = require('express');
const router = express.Router();
var path = require('path');

// Get HTTP -
// get list of cats from db
router.get('/cats', function(req, res) {
		// res.send({type: 'GET'});
		console.log('You made a GET Request');

		// connection.query("SELECT * FROM catsgo", function(err, row, fields){
		// 	if(!!err) throw err;

		// 	console.log('Successful query');
		// })
		// connection.end();

		//__dirname is a node API, gets your root directory.
		res.sendFile(path.join(__dirname, '../index.html'));

		// JADE TEMPLATE
		// res.render('index', { 
		// 	title: 'Rent a cat',
		// 	h1_title: 'Welcome to the Cat Directory - Rent a cat!',
		// 	p_content: 'Cat directory, rent a cat'
		// 	});

});

router.post('/cats', function(req, res){
	
	res.send({
		type: 'POST',
		name: req.body.name,
		job: req.body.job
	});
})


router.put('/cats/:id', function(req, res){
	res.send({type: 'PUT'});
})

router.delete('/cats/:id', function(req, res){
	res.send({type: 'DELETE'});
})

module.exports = router;
