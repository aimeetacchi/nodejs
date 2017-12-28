const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const request = require('request');
//Use Cors to enable cross browser data send
var cors = require('cors');
//add cors to app
app.use(cors());
// create application/json parser 
var jsonParser = bodyParser.json();

const websiteUrl = 'http://skymail.digital-sky.co.uk/api/jsonrpcserver?version=3.0';
const apiKey = '6ca897ca45da308a76d0f023940d88806ca81a040e28d1d48bfd2aa3940de017';
const listID = 407843;

app.get('/',jsonParser, cors(), function(req,res){
	console.log(req.body);
	//Get the parameters from the url
	res.send('You did a get request');

	// Set the headers
    var headers = {
        'Content-Type':     'application/json',
    }

    body = {
			    "id": 1,
			    "method": "getContactById",
			    "params": [
			        apiKey,
			        listID
			    ]
			};
			// Configure the request
			var options = {
				url: websiteUrl,
				method: 'GET',
				headers: headers,
				json: body
			}
});




app.listen(3000, function(){
	console.log('Server started on port 3000...');
});