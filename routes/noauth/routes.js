var router = express.Router();

const product = require('./routes/product')

router.use("/products", product)

const category = require('./routes/category')

router.use("/categories", category)

module.exports = router