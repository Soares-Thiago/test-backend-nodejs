var router = express.Router();

const categoryController  = require('../controllers/category')

router.get("/", categoryController.index)
router.get("/search/:searchTerm", categoryController.search)
router.get("/:categoryid", categoryController.findById)
router.post("/", categoryController.create)
router.put("/:categoryid", categoryController.update)
router.put("/desactive/:categoryid", categoryController.desactive)
router.put("/active/:categoryid", categoryController.active)


module.exports = router;
