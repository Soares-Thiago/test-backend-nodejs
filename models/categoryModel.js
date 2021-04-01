const uniqueValidator = require('mongoose-unique-validator')

const CategoriesModel = new mongoose.Schema({
  name: {type: String, required: true, unique: true},
  status: {type: Boolean, required: true}
},{
  timestamps: true
});

CategoriesModel.plugin(uniqueValidator)

module.exports = mongoose.model("Categories", CategoriesModel)