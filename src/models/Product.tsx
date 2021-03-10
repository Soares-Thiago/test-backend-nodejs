import {Schema, model, Document} from 'mongoose'
import {ICategories} from '../models/Category'
import uniqueValidator from 'mongoose-unique-validator'

interface IProducts extends Document{
  title: string
  description: string
  price: number
  category: ICategories['_id']
}

const ProductsModel = new Schema({
  title: {type: String, required: true, unique : true},
  description: String,
  price: {type: Number, required: true},
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Categories',
    required: true
  }
},{
  timestamps: true
})

ProductsModel.plugin(uniqueValidator)

export default model<IProducts>('Produtcs',ProductsModel)