
var mongoose= require('mongoose');

var WhispSchema = new mongoose.Schema({

    owner : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    typeWhisp: {type: String , required: true},
    content: {  type: String , required: true},
    tittle:{  type: String , required: true},
    cordenate:{ latitude: Number , Longitude: Number},
    meta: {likes: Number, views: Number, comments:Number}
});


mongoose.model('Whisp', WhispSchema);