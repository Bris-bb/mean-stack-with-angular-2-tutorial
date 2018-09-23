const express = require('express');
const app = express();

const mongoose = require('mongoose');

const config = require('./config/database');

const path = require('path');
app.use(express.static(__dirname + '/client/dist/'));


mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
	if (err) 
		console.log('Unable to connect', err);
	else {
		console.log('Connected to ' + config.db);
		console.log(config.secret);
	}
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname+'/client/dist/client/index.html'));
	// res.send('Wow! Running anything!');
});


app.listen(8080, () => {
	console.log('Listening on port 8080');
});

