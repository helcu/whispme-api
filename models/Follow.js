
var mongoose= require('mongoose');

var FollowSchema = new mongoose.Schema({

    follower : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    followed : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
});


mongoose.model('Follow', FollowSchema);