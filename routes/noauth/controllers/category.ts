import {Request, Response} from 'express'

import CategoryService from '../services/category'

class CategoryController {

  public async search (req: Request, res: Response): Promise<Response>{
    const searchTerm = req.params.searchTerm
    try{
      const categories = await CategoryService.findByName(searchTerm)
      return res.status(200).json(categories)

    }catch(e){
      return res.status(500).json({"error": e.message})
    }
  }

  public async index (req: Request, res: Response): Promise<Response>{
    try{
      const categories = await CategoryService.find()
      return res.status(200).json(categories)

    }catch(e){
      return res.status(500).json({"error": e.message})
    }
  }

  public async create (req: Request, res: Response): Promise<Response>{
    try{
      const category = await CategoryService.save(req.body)
      return res.status(200).json(category)

    }catch(e){
      return res.status(500).json({"error": e.message})
    }
  }

  public async update (req: Request, res: Response): Promise<Response>{
    const categoryid = req.params.categoryid
    try{
      await CategoryService.updateOne({ _id: categoryid },req.body)
      const category = await CategoryService.findById(categoryid)
      return res.status(200).json(category)

    }catch(e){
      return res.status(400).json({"error": e.message})
    }
  }

  public async desactive (req: Request, res: Response): Promise<Response>{
    const categoryid = req.params.categoryid
    try{
      await CategoryService.updateOne({ _id: categoryid },{status: false})
      const category = await CategoryService.findById(categoryid)
      return res.status(200).json(category)

    }catch(e){
      return res.status(400).json({"error": e.message})
    }
  }

  public async active (req: Request, res: Response): Promise<Response>{
    const categoryid = req.params.categoryid
    try{
      await CategoryService.updateOne({ _id: categoryid },{status: true})
      const category = await CategoryService.findById(categoryid)
      return res.status(200).json(category)

    }catch(e){
      return res.status(400).json({"error": e.message})
    }
  }

  public async findById (req: Request, res: Response): Promise<Response>{
    const categoryid = req.params.categoryid
    try{
      const product = await CategoryService.findById(categoryid)
      return res.status(200).json(product)

    }catch(e){
      return res.status(400).json({"error": e.message})
    }
  }
}

export default new CategoryController()