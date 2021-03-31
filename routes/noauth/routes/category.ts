import { Router } from 'express';

const router = Router();

import CategoryController from '../controllers/category'

router.get("/", CategoryController.index)
router.get("/search/:searchTerm", CategoryController.search)
router.get("/:categoryid", CategoryController.findById)
router.post("/", CategoryController.create)
router.put("/:categoryid", CategoryController.update)
router.put("/desactive/:categoryid", CategoryController.desactive)
router.put("/active/:categoryid", CategoryController.active)


export default router;
