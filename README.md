# Organizing-routes-in-express-js-and-node.js


Instead of making app.js heaving with every single routing rule, try to organise it as suggested below.
The your-app/app.js contains the below line of codes for the purpose of routing.
		
		var routes = require('./routes/index');
		var users = require('./routes/users');

		app.use('/', routes);
		app.use('/users', users);
		
So, I thought to make this things a bit easier and organize app.js file
The structure that I kept in mind is like as below:-
		
		router/
		    routes/
		        users.js
		    index.js
		    
In app.js, first of all comment
		
		var routes = require('./routes/index');
		var users = require('./routes/users');
		app.use('/', routes);
		app.use('/users', users);

The above 4 lines.

Add the below line of code just after var app = express(); :-

		var router = require('./routes')(app);
		
Then, here is the code of index.js route file:-
		
		var express = require('express');
		var router = express.Router();

		module.exports = function(app) {
		    app.use('/users', require('../routes/users'));
		};
		
The code of users.js route file is as follows:-

		var express = require('express');
		var router = express.Router();
		
		router.post('/', function (req, res) {
		    // handle a post request to this route
		    console.log("respond with a resource");
		});
		
		router.get('/info', function (req, res) {
		    // handle a get request to this route
		});
		module.exports = router;
		
To run:-
		
		http://localhost:3000/users
		
For more information you may visit:-

http://cj7.info/blog/organizing-routes-in-express-js-and-nodejs
