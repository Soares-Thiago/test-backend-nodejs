const categoryModel = require('../../../models/categoryModel')

module.exports = categoryServices = {
    findByName: (searchTerm) => {
        return categoryModel
            .find({ name: { '$regex' : searchTerm, '$options' : 'i' } })
            .exec()
    },
    find: () => {
        return categoryModel.find().exec()
    },
    save: (body) => {
        return categoryModel.create(body)
    },
    updateOne: (categoryid, body) => {
        return categoryModel.findOneAndUpdate({ _id: categoryid }, body, {new: true})
    },
    desactive: (categoryid) => {
        return categoryModel.findOneAndUpdate({ _id: categoryid }, {status: false}, {new: true})
    },
    activate: (categoryid) => {
        return categoryModel.findOneAndUpdate({ _id: categoryid }, {status: true}, {new: true})
    },
    findById: (categoryid) => {
        return categoryModel.findById(categoryid).exec()
    }

}
