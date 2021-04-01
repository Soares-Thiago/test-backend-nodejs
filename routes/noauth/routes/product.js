var router = express.Router();

const productController  = require('../controllers/products')

router.get("/", productController.index)
router.get("/search/:searchTerm", productController.search)
router.get("/:productid", productController.findById)
router.get("/category/:categoryid", productController.findByCategoryId)
router.post("/", productController.create)
router.put("/:productid", productController.update)
router.delete("/:productid", productController.delete)


module.exports = router