import {Schema, model, Document} from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

export interface ICategories extends Document{
  name: string
  status: boolean
}

const CategoriesModel = new Schema({
  name: {type: String, required: true, unique: true},
  status: {type: Boolean, required: true}
},{
  timestamps: true
})

CategoriesModel.plugin(uniqueValidator)

export default model<ICategories>('Categories',CategoriesModel)