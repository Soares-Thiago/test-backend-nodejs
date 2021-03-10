import {Request, Response} from 'express'

import Category from '../models/Category'

class CategoryController {

  public async search (req: Request, res: Response): Promise<Response>{
    const searchTerm = req.params.searchTerm
    try{
      const categories = await Category.find({ name: { '$regex' : searchTerm, '$options' : 'i' } })
      return res.status(200).json(categories)

    }catch(e){
      return res.status(500).json({"error": e.message})
    }
  }

  public async index (req: Request, res: Response): Promise<Response>{
    try{
      const categories = await Category.find()
      return res.status(200).json(categories)

    }catch(e){
      return res.status(500).json({"error": e.message})
    }
  }

  public async create (req: Request, res: Response): Promise<Response>{
    try{
      const category = await Category.create(req.body)
      return res.status(200).json(category)

    }catch(e){
      return res.status(500).json({"error": e.message})
    }
  }

  public async update (req: Request, res: Response): Promise<Response>{
    const categoryid = req.params.categoryid
    try{
      await Category.updateOne({ _id: categoryid },req.body)
      const category = await Category.findById(categoryid)
      return res.status(200).json(category)

    }catch(e){
      return res.status(400).json({"error": e.message})
    }
  }

  public async desactive (req: Request, res: Response): Promise<Response>{
    const categoryid = req.params.categoryid
    try{
      await Category.updateOne({ _id: categoryid },{status: false})
      const category = await Category.findById(categoryid)
      return res.status(200).json(category)

    }catch(e){
      return res.status(400).json({"error": e.message})
    }
  }

  public async active (req: Request, res: Response): Promise<Response>{
    const categoryid = req.params.categoryid
    try{
      await Category.updateOne({ _id: categoryid },{status: true})
      const category = await Category.findById(categoryid)
      return res.status(200).json(category)

    }catch(e){
      return res.status(400).json({"error": e.message})
    }
  }

  public async findById (req: Request, res: Response): Promise<Response>{
    const categoryid = req.params.categoryid
    try{
      const product = await Category.findById(categoryid)
      return res.status(200).json(product)

    }catch(e){
      return res.status(400).json({"error": e.message})
    }
  }
}

export default new CategoryController()