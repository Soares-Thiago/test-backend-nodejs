import { Router } from 'express';

const router = Router();

import ProductController from '../controllers/product'

router.get("/", ProductController.index)
router.get("/search/:searchTerm", ProductController.search)
router.get("/:productid", ProductController.findById)
router.get("/category/:categoryid", ProductController.findByCategoryId)
router.post("/", ProductController.create)
router.put("/:productid", ProductController.update)
router.delete("/:productid", ProductController.delete)


export default router;
