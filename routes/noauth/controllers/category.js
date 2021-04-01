const categoryServices = require('../services/category')

module.exports = categoryController = {
    search: (req, res) => {
        categoryServices
        .findByName(req.params.searchTerm)
        .then((categories) => {
            res.status(200).json(categories)
        }).catch((err) => {
            res.status(500).json({"error": err.message})
        })
    },
    index: (req, res) => {
        categoryServices
        .find()
        .then((categories)=>{
            res.status(200).json(categories)
        })
        .catch((err) => {
            res.status(500).json({"error": err.message})
        })
    },
    create: (req, res) => {
        categoryServices
        .save(req.body)
        .then((category)=>{
            return res.status(200).json(category)
        })
        .catch((err) => {
            res.status(500).json({"error": err.message})
        })
    },
    update: (req, res) => {
        categoryServices
        .updateOne(req.params.categoryid,req.body)
        .then((category)=> {
            res.status(200).json(category)
        })
        .catch((err) => {
            res.status(500).json({"error": err.message})
        })
    },
    active: (req, res) => {
        categoryServices
        .activate(req.params.categoryid)
        .then((category)=> {
            res.status(200).json(category)
        })
        .catch((err) => {
            res.status(500).json({"error": err.message})
        })
    },
    desactive: (req, res) => {
        categoryServices
        .desactive(req.params.categoryid)
        .then((category)=> {
            res.status(200).json(category)
        })
        .catch((err) => {
            res.status(500).json({"error": err.message})
        })
    },
    findById: (req, res) => {
        categoryServices
        .findById(req.params.categoryid)
        .then((category)=> {
            res.status(200).json(category)
        })
        .catch((err) => {
            res.status(500).json({"error": err.message})
        })
    }
}
