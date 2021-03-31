import Category from '../../../models/Category'

class CategoryService {
    public async findByName (searchTerm: string){
        try{
          const category = await Category.find({ name: { '$regex' : searchTerm, '$options' : 'i' } }).exec()
          return category
        }catch(e){
          return e
        }
      }
    
      public async find (){
        try{
          const categories = await Category.find()
          return categories
        }catch(e){
          return e
        }
      }
    
      public async save (body){
        try{
          const category = await Category.create(body)
          return category
    
        }catch(e){
          return e
        }
      }
    
      public async updateOne (categoryid, body){
        try{
          await Category.updateOne({ _id: categoryid },body)
          const category = await Category.findById(categoryid)
          return category
    
        }catch(e){
          return e
        }
      }
    
      public async desactive (categoryid){
        try{
          await Category.updateOne({ _id: categoryid },{status: false})
          const category = await Category.findById(categoryid)
          return category
    
        }catch(e){
          return e
        }
      }
    
      public async active (categoryid){
        try{
          await Category.updateOne({ _id: categoryid },{status: true})
          const category = await Category.findById(categoryid)
          return category
    
        }catch(e){
          return e
        }
      }
    
      public async findById (categoryid){
        try{
          const product = await Category.findById(categoryid)
          return product
    
        }catch(e){
          return e
        }
      }
}

export default new CategoryService()