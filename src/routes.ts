import { Router } from 'express';

import ProductController from './controllers/ProductController';
import CategoryController from './controllers/CategoryController';

const router = Router();

router.get("/products", ProductController.index)
router.get("/products/search/:searchTerm", ProductController.search)
router.get("/products/:productid", ProductController.findById)
router.get("/products/category/:categoryid", ProductController.findByCategoryName)
router.post("/products", ProductController.create)
router.put("/products/:productid", ProductController.update)
router.delete("/products/:productid", ProductController.delete)

router.get("/categories", CategoryController.index)
router.get("/categories/search/:searchTerm", CategoryController.search)
router.get("/categories/:categoryid", CategoryController.findById)
router.post("/categories", CategoryController.create)
router.put("/categories/:categoryid", CategoryController.update)
router.put("/categories/desactive/:categoryid", CategoryController.desactive)
router.put("/categories/active/:categoryid", CategoryController.active)

export default router;