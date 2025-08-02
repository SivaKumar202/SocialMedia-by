const mongooes = require('mongoose');

const chatSchema = new mongooes.Schema({
    isGroup:{
        type : Boolean,
        default : false,
    },
    participants: [{type:mongooes.Schema.Types.ObjectId,ref:'User'}],
    groupName : {
        type : String
    },
    createdAt : {
        type : Date,
        default : Date.now
    }

})

const Chat = mongooes.model('Chat',chatSchema)
module.exports = Chat;