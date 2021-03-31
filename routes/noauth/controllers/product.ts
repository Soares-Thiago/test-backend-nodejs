import {Request, Response} from 'express'

import ProductService from '../services/product'

class ProductController {

  public async search (req: Request, res: Response): Promise<Response>{
    const searchTerm = req.params.searchTerm
    try{
      const products = await ProductService.findByName(searchTerm)
      return res.status(200).json(products)

    }catch(e){
      return res.status(500).json({"error": e.message})
    }
  }

  public async findByCategoryId (req: Request, res: Response): Promise<Response>{
    const categoryid = req.params.categoryid
    try{
     
      const products = await ProductService.findByCategoryId(categoryid)
      return res.status(200).json(products)

    }catch(e){
      return res.status(500).json({"error": e.message})
    }
  }

  public async index (req: Request, res: Response): Promise<Response>{
    try{
      const products = await ProductService.find()
      return res.status(200).json(products)

    }catch(e){
      return res.status(500).json({"error": e.message})
    }
  }

  public async create (req: Request, res: Response): Promise<Response>{
    try{
      const product = await ProductService.create(req.body)
      return res.status(200).json(product)

    }catch(e){
      return res.status(500).json({"error": e.message})
    }
  }

  public async update (req: Request, res: Response): Promise<Response>{
    const productId = req.params.productid
    try{
      await ProductService.update({ _id: productId },req.body)
      const product = await ProductService.findById(productId)
      return res.status(200).json(product)

    }catch(e){
      return res.status(400).json({"error": e.message})
    }
  }

  public async delete (req: Request, res: Response): Promise<Response>{
    const productId = req.params.productid
    try{
      await ProductService.delete({ _id: productId })
      return res.status(200).json({"message": "Product successfully deleted"})

    }catch(e){
      return res.status(400).json({"error": e.message})
    }  
  }

  public async findById (req: Request, res: Response): Promise<Response>{
    const productId = req.params.productid
    try{
      const product = await ProductService.findById(productId)
      return res.status(200).json(product)

    }catch(e){
      return res.status(400).json({"error": e.message})
    }
  }
}

export default new ProductController()