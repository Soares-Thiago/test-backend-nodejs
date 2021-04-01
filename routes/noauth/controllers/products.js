const productServices = require('../services/product')

module.exports = productController = {
    search: (req, res) => {
        productServices
        .findByName(req.params.searchTerm)
        .then((products) => {
            res.status(200).json(products)
        }).catch((err) => {
            res.status(500).json({"error": err.message})
        })
    },
    findByCategoryId: (req, res) => {
        productServices
        .findByCategoryId(req.params.categoryid)
        .then((product)=>{
            res.status(200).json(product)
        })
        .catch((err) => {
            res.status(500).json({"error": err.message})
        })
    },
    index: (req, res) => {
        productServices
        .find()
        .then((products)=>{
            res.status(200).json(products)
        })
        .catch((err) => {
            res.status(500).json({"error": err.message})
        })
    },
    create: (req, res) => {
        productServices
        .create(req.body)
        .then((product)=>{
            return res.status(200).json(product)
        })
        .catch((err) => {
            res.status(500).json({"error": err.message})
        })
    },
    update: (req, res) => {
        productServices
        .update(req.params.productid,req.body)
        .then((product)=> {
            res.status(200).json(product)
        })
        .catch((err) => {
            res.status(500).json({"error": err.message})
        })
    },
    delete: (req, res) => {
        productServices
        .delete(req.params.productid)
        .then((product)=> {
            res.status(200).json(product)
        })
        .catch((err) => {
            res.status(500).json({"error": err.message})
        })
    },
    findById: (req, res) => {
        productServices
        .findById(req.params.productid)
        .then((product)=> {
            res.status(200).json(product)
        })
        .catch((err) => {
            res.status(500).json({"error": err.message})
        })
    }
}

