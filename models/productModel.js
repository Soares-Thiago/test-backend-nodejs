const uniqueValidator = require('mongoose-unique-validator')

const ProductsModel = new mongoose.Schema({
  title: {type: String, required: true, unique : true},
  description: String,
  price: {type: Number, required: true},
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categories',
    required: true
  }
},{
  timestamps: true
});


ProductsModel.plugin(uniqueValidator)

module.exports =  mongoose.model('Produtcs',ProductsModel)