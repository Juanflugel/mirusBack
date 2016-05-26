var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var billSchema = new Schema ({

	billId:String,
	providerId:String,
	providerName:String,
	bougthProducts:[{
		itemId:String,
		itemImage:String,
		itemName:String,
		itemLastDate:Date,
		itemAmount:Number,
		itemUnits:String,
		itemPrice:Number,

	}]


});

var Bill = mongoose.model('Bill',billSchema,'bills');

module.exports = Bill;