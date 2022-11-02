const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Product.find()
            .then((products) => res.send(products))
            .catch(next);
    },
    getOne: (req,res,next) => {
        const id = req.params.id;
        models.Product.findById(id).then((products)=> res.send(products)).catch(next);
    },
    post: (req, res, next) => {
        const { description } = req.body;
        const { _id } = req.user;

        models.Product.create({ description, author: _id })
            .then((createdProduct) => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { posts: createdProduct } }),
                    models.Product.findOne({ _id: createdProduct._id })
                ]);
            })
            .then(([modifiedObj, productObj]) => {
                res.send(productObj);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { description } = req.body;
        models.Product.updateOne({ _id: id }, { description })
            .then((createdProduct) => res.send(createdProduct))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Product.deleteOne({ _id: id })
            .then((removedProduct) => res.send(removedProduct))
            .catch(next)
    }
};