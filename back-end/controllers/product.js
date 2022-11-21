const models = require('../models');

module.exports = {
    product:{
        getOneProduct: (req,res,next) => {
            console.log(req.body);
            console.log("above is the body request for getOneProduct")
            const id = req.body.id;
            models.Product.findOne(id).then((product) => res.send(product))
            .catch(next);
        },


        get: (req, res, next) => {
            models.Product.find()
                .then((products) => res.send(products))
                .catch(next);
        },
          post: function(req,res){
              let body = req.body;
              console.log(body);
          
                  new Product(body).save()
                  .then((result)=>{
                      console.log(result);
                  });
      
      
          },
        createProduct: function(req,res){
            const { name, quantity, price, vendor, description, imageURL} = req.body;
            // Checking for password Match.......
            if(password !== confirmPassword){                                     
                return res.status(400).send({message:"Password does not match"});
            }
            models.Product.create({  name, quantity, price, vendor, description, imageURL })
                .then((createdProduct) => res.send({productId:createdProduct._id}))
                .catch(next)
        }
      },
    get: (req, res, next) => {
        models.Product.find()
            .then((products) => res.send(products))
            .catch(next);
    },
    getUser:(req,res,next) =>{
        const id = req.body.id;
        //console.log(id);
        models.Product.find({id})
            .then((origamies) => res.send(origamies))
            .catch(next);
    },
    post: {

        createProduct: (req, res, next) => {
        const { productName } = req.body;
        const { price } = req.body;
        const { description } = req.body;
        const { vendor } = req.body;
        const { collections } = req.body;
        const { imageURL } = req.body;
        const { _id } = req.user;

        models.Product.create({ productName, price, description, vendor, collections , imageURL, creator: _id })
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



    },

    put: (req, res, next) => {
        const id = req.params.id;
      
        const { productName } = req.body;
        const { price } = req.body;
        const { description } = req.body;
        const { vendor } = req.body;
        const { collections } = req.body;
        const { imageURL } = req.body;
        models.Product.updateOne({ _id: id }, { productName, price, description, vendor, collections, imageURL })
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


// const formidable = require("formidable");
// const _ = require('lodash');
// const fs = require('fs');
// const Product = require("../models/Product");
// const { errorHandler } = require("../helpers/dbErrorHandlers.js");
// const product = require("../models/Product");

// exports.productById = (req, res, next, id) => {
//     Product.findById(id)
//     .populate('category')
//     .exec((err, product) => {
//         if(err || !product) {
//             return res.status(400).json({
//                 error: "Product not found"
//             });
//         }

//         req.product = product;
//         next();
//     });
// };

// exports.read = (req, res) => {
//     req.product.photo = undefined
//     return res.json(req.product);
// }

// exports.create = (req,res) => {
//     let form = new formidable.IncomingForm();
//     form.keepExtensions = true
//     form.parse(req, (err, fields, files) => {
//         if(err) {
//             return res.status(400).json({
//                 error: 'Image could not be uploaded'
//             });
//         }

//         //Check for all fields
//         const {name, description, price, category, quantity, shipping} = fields;

//         if(!name || !description || !price || !category || !quantity || !shipping) {
//             return res.status(400).json({
//                 error: "All fields are required"
//             });
//         }

//         let product = new Product(fields);
        
//         if(files.photo) {
//             //console.log('FILES PHOTO: ', files.photo)
//             if(files.photo.size > 1000000) {
//                 return res.status(400).json({
//                     message: 'Image should be less than 1 Mb in size'
//                 });
//             }
            
//             product.photo.data = fs.readFileSync(files.photo.path);
//             product.photo.contentType = files.photo.type;
//         }

//         product.save((err, result) => {
//             if(err) {
//                 return res.status(400).json({
//                     error: errorHandler(err)
//                 })
//             }
//             res.json(result);
//         });
//     });
// };

// exports.remove = (req, res)=> {
//     let product = req.product;
//     product.remove((err, deletedProduct) => {
//         if(err) {
//             return res.status(400).json({
//                 error: errorHandler(err)
//             })
//         }
//         res.json({
//             deletedProduct,
//             "message": "Product deleted successfuly"
//         });
//     });
// }

// exports.update = (req,res) => {
//     let form = new formidable.IncomingForm();
//     form.keepExtensions = true
//     form.parse(req, (err, fields, files) => {
//         if(err) {
//             return res.status(400).json({
//                 error: 'Image could not be uploaded'
//             });
//         }

//         let product = req.product;
//         product= _.extend(product, fields)
        
//         if(files.photo) {
//             //console.log('FILES PHOTO: ', files.photo)
//             if(files.photo.size > 1000000) {
//                 return res.status(400).json({
//                     message: 'Image should be less than 1 Mb in size'
//                 });
//             }
            
//             product.photo.data = fs.readFileSync(files.photo.path);
//             product.photo.contentType = files.photo.type;
//         }

//         product.save((err, result) => {
//             if(err) {
//                 return res.status(400).json({
//                     error: errorHandler(err)
//                 })
//             }
//             res.json(result);
//         });
//     });
// };

// /**
//  * Sell/Arrival
//  * By Sell = /products?sortBy=sold&order=desc&limit=4
//  * By Arrival = /products?sortBy=createdAt&order=desc&limit=4
//  * If no params are sent, then all products are returned
//  */

// exports.list = (req, res) => {
//     let order = req.query.order ? req.query.order : 'asc';
//     let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
//     let limit = req.query.limit ? parseInt(req.query.limit) : 6;

//     Product.find()
//         .select("-photo")
//         .populate("category")
//         .sort([[sortBy, order]])
//         .limit(limit)
//         .exec((err, products) => {
//             if(err) {
//                 return res.status(400).json({
//                     error: "Products not found"
//                 });
//             }
//             res.json(products);
//         });
// };


// /**
//  * It will find the products based on the request product category.
//  * Other products that has the same category will be returned
//  */

// exports.listRelated = (req, res) => {
//     let limit = req.query.limit ? parseInt(req.query.limit) : 6;
    
//     Product.find({_id: {$ne: req.product}, category: req.product.category})
//         .limit(limit)
//         .populate('category', '_id name')
//         .exec((err, products) => {
//             if(err) {
//                 return res.status(400).json({
//                     error: "Products not found"
//                 });
//             }
//             res.json(products);
//         })
// };

// exports.listCategories = (req, res) => {
//     Product.distinct("category", {}, (err, categories) => {
//         if(err) {
//             return res.status(400).json({
//                 error: "Categories not found"
//             });
//         }
//         res.json(categories);
//     })
// };

// /**
//  * list products by search
//  * we will implement product search in react frontend
//  * we will show categories in checkbox and price range in radio buttons
//  * as the user clicks on those checkbox and radio buttons
//  * we will make api request and show the products to users based on what he wants
//  */
     
// exports.listBySearch = (req, res) => {
//     let order = req.body.order ? req.body.order : "desc";
//     let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
//     let limit = req.body.limit ? parseInt(req.body.limit) : 100;
//     let skip = parseInt(req.body.skip);
//     let findArgs = {};
     
//     // console.log(order, sortBy, limit, skip, req.body.filters);
//     // console.log("findArgs", findArgs);
     
//     for (let key in req.body.filters) {
//         if (req.body.filters[key].length > 0) {
//             if (key === "price") {
//                 // gte -  greater than price [0-10]
//                 // lte - less than
//                 findArgs[key] = {
//                     $gte: req.body.filters[key][0],
//                     $lte: req.body.filters[key][1]
//                 };
//             } else {
//                 findArgs[key] = req.body.filters[key];
//             }
//         }
//     }
     
//     Product.find(findArgs)
//         .select("-photo")
//         .populate("category")
//         .sort([[sortBy, order]])
//         .skip(skip)
//         .limit(limit)
//         .exec((err, data) => {
//             if (err) {
//                 return res.status(400).json({
//                     error: "Products not found"
//                 });
//             }
//             res.json({
//                 size: data.length,
//                 data
//             });
//         });
// };

// exports.photo = (req, res, next) => {
//     if(req.product.photo.data) {
//         res.set('Content-Type', req.product.photo.contentType);

//         return res.send(req.product.photo.data);
//     }
//     next();
// };

// exports.listSearch = (req, res) => {
//     const query = {};

//     if(req.query.search) {
//         query.name = {$regex: req.query.search, $options: 'i'};

//         if(req.query.category && req.query.category != 'All') {
//             query.category = req.query.category;
//         }

//         Product.find(query, (err, products) => {
//             if(err) {
//                 return res.status(400).json({
//                     error: errorHandler(err)
//                 });
//             }
//             res.json(products);
//         }).select('-photo');
//     }
// };

// exports.decreaseQuantity = (req, res, next) => {
//     let bulkOps = req.body.order.products.map((item) => {
//         return {
//             updateOne: {
//                 filter: {_id: item._id},
//                 update: {$inc: {quantity: -item.count, sold: +item.count}}
//             }
//         };
//     });

//     Product.bulkWrite(bulkOps, {}, (error, products) => {
//         if(error) {
//             return res.status(400).json({
//                 error: 'Could not update product'
//             });
//         }
//         next();
//     });
// };