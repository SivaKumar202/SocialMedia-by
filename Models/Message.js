const mongooes = require("mongoose");

const messageShema = new mongooes.Schema({
  chatId: { type: mongooes.Schema.Types.ObjectId, ref: "chat" },
  senderId:{type:mongooes.Schema.Types.ObjectId, ref : "User",required:true},
  receiverId:{type:mongooes.Schema.Types.ObjectId, ref:'User'},
  text:{type:String},
  media:[{
    type:{type:string},
    url:{type:string}
  }],
  createdAt:{type:Date,default:Date.now}
});

const Message = mongooes.model('Message',messageShema);
module.exports = Message
