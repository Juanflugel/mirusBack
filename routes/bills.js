var mongoose = require ('mongoose'),
bodyParser = require('body-parser');

function bills (app,Bill){

	app.use(bodyParser.json());

	app.get('/prueba',prueba);
	app.post('/prueba',postyea);

	function postyea(req,res){
		Bill.create(req.body,function (err,obj){
			res.json(obj);
		});	
	}

	function prueba (req,res){
		// res.json('todo bien primo');
		Bill.find({},function (err,array){
			res.json(array);
		});
	}


}

module.exports = bills;