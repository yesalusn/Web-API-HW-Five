var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ReviewSchema = new Schema({
	username: {type: String, required: true, index:{unique:true}},
	review: {type: String, required: true},
	stars: {type: Number, required: true},
	movieID: {type: number},
	visible: {type: boolean}
});

MovieSchema.pre('save', function(next){
	var movie = this;
});

module.exports = mongoose.model('Movie', MovieSchema);