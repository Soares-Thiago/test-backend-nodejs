import { Router } from 'express';

const router = Router();

import product from './routes/product'

router.use("/products", product)

import category from './routes/category'

router.use("/categories", category)


export default router;