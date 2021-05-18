const Mongoose = require("mongoose");

const productSchema = Mongoose.Schema({
  _id: Mongoose.Types.ObjectId,
  name: { type:String, require : true},
  price:  { type:Number, require : true }
});
module.exports = Mongoose.model('Product', productSchema)