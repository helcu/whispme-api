
var mongoose= require('mongoose');

var CommentSchema = new mongoose.Schema({

    owner : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    whispId : {type: mongoose.Schema.Types.ObjectId, ref: 'Whisp'},
    content : {type: String, required: true}
});


mongoose.model('Comment', CommentSchema);