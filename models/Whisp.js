
var mongoose= require('mongoose');

var WhispSchema = new mongoose.Schema({

    owner : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    typewhisp: {type: String , required: true},
    content: {  type: String , required: true},
    title:{  type: String , required: true},
    place:{ type: String , required: true},
    loc:[],
    meta: {likes: Number, views: Number, comments:Number},
    update:{type: Date, default: Date.now}
});

WhispSchema.index({ loc: '2dsphere' });

mongoose.model('Whisp', WhispSchema);