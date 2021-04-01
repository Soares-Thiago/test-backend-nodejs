const productModel = require('../../../models/productModel')

module.exports = productSerrvices = {
    findByName: (searchTerm) => {
        return productModel
        .find({ title: { '$regex' : searchTerm, '$options' : 'i' } })
        .exec()
    },
    findByCategoryId: (categoryid) => {
        return productModel.find({category: categoryid}).exec()
    },
    find: () => {
        return productModel.find().exec()
    },
    create: (body) => {
        return productModel.create(body)
    },
    update: (productId, body) => {
        return productModel.findOneAndUpdate({ _id: productId }, body, {new: true})
    },
    delete: (productId) => {
        return productModel.deleteOne({ _id: productId }).then()
        //return ({"message": "Product successfully deleted"})
    },
    findById: (productId) => {
        return productModel.findById(productId).exec()
    }
}
