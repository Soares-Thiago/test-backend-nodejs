import Products from '../../../models/Product'

class ProductService {

  public async findByName (searchTerm){
    try{
      const products = await Products.find({ title: { '$regex' : searchTerm, '$options' : 'i' } })
      return products

    }catch(e){
      return e.message
    }
  }

  public async findByCategoryId (categoryid){
    try{
     
      const products = await Products.find({category: categoryid})
      return products

    }catch(e){
      return e.message
    }
  }

  public async find (){
    try{
      const products = await Products.find()
      return products

    }catch(e){
      return e.message
    }
  }

  public async create (body){
    try{
      const product = await Products.create(body)
      return product

    }catch(e){
      return e.message
    }
  }

  public async update (productId, body){
    try{
      await Products.updateOne({ _id: productId },body)
      const product = await Products.findById(productId)
      return product

    }catch(e){
      return e.message
    }
  }

  public async delete (productId){
    try{
      await Products.deleteOne({ _id: productId })
      return ({"message": "Product successfully deleted"})

    }catch(e){
      return e.message
    }  
  }

  public async findById (productId){
    try{
      const product = await Products.findById(productId)
      return product

    }catch(e){
      return e.message
    }
  }
}

export default new ProductService()