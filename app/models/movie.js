var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MovieSchema = new Schema({
	title: {type: String, required: true, index: {unique: true}},
	year: {type: Number, required: true},
	actor: {type: Array, "default": [], required: true}
});

MovieSchema.pre('save', function(next){
	var movie = this;
});

module.exports = mongoose.model('Movie', MovieSchema);