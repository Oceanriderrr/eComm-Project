const models = require('../models');
const config = require('../config/config');
const utils = require('../utils');

module.exports = {
    get: (req, res, next) => {
        models.User.find()
            .then((users) => res.send(users))
            .catch(next)
    },
    getOne: (req, res, next) => {
        const {id} = req.params;
        console.log(id);
        models.User.findById(id)
            .then((user) => res.send(user))
            .catch(next)
    },

    post: {
        register: (req, res, next) => {
            const { username, email, password, confirmPassword } = req.body;
            // Checking for password Match.......
            if(password !== confirmPassword){                                     
                return res.status(400).send({message:"Password does not match"});
            }
            models.User.create({ username, email, password, confirmPassword, })
                .then((createdUser) => res.send({id:createdUser._id}))
                .catch(next)
        },

        login: (req, res, next) => {
            const { username, password } = req.body;
            console.log(req.body);
            models.User.findOne({ username })
                .then((user) => Promise.all([user, user.matchPassword(password)]))
                .then(([user, match]) => {
                    if (!match) { //if the password doesnt match
                        res.status(401).send('Invalid password');
                        return;
                    }
                    //if the password does match
                    const token = utils.jwt.createToken({ id: user._id });
                    res.header(
                        'Access-Control-Allow-Headers',
                        'Origin, X-Requested-With, Content-Type, Accept'
                    )
                    .cookie(config.authCookieName, token).send({
                        id:user._id,
                        cookie:{
                            name:config.authCookieName,
                            token
                        }
                    });
                })
                .catch(next);
        },

        logout: (req, res, next) => {
            const token = req.cookies[config.authCookieName];
            console.log('-'.repeat(100));
            console.log(token);
            console.log('-'.repeat(100));
            models.TokenBlacklist.create({ token })
                .then(() => {
                    res.clearCookie(config.authCookieName).send('Logout successfully!');
                })
                .catch(next);
        }
    },




    // UPDATE AND DELETE FOR USER PROFILE......NOT CURRENTLY USED IN OUR APPLICATION...

    put: (req, res, next) => {
        const id = req.params.id;
        const { username, password } = req.body;
        models.User.update({ _id: id }, { username, password })
            .then((updatedUser) => res.send(updatedUser))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.User.deleteOne({ _id: id })
            .then((removedUser) => res.send(removedUser))
            .catch(next)
    }
};



// const User = require('../models/User');
// const Order = require('../models/Order');
// const { errorHandler } = require('../helpers/dbErrorHandlers.js');

// exports.userById = (req, res, next, id) => {
//     User.findById(id).exec((err, user) => {
//         if(err || !user) {
//             return res.status(400).json({
//                 error: 'User not found'
//             })
//         }
//         req.profile = user;
//         next();
//     });
// };

// exports.read = (req, res) => {
//     req.profile.hashedPassword = undefined;
//     req.profile.salt = undefined;

//     return res.json(req.profile);
// };

// exports.update = (req, res) => {
//     User.findOneAndUpdate({_id: req.profile._id}, {$set: req.body}, {new: true}, (err, user) => {
//         if(err) {
//             return res.status(400).json({
//                 error: 'You are not authorized to permison this action'
//             });
//         }
//         user.hashedPassword = undefined;
//         user.salt = undefined;
//         res.json(user);
//     });
// };

// exports.addOrderToUserHistory = (req, res, next) => {
//     let history = [];

//     req.body.order.products.forEach((item) => {
//         history.push({
//             _id: item._id,
//             name: item.name,
//             description: item.description,
//             category: item.category,
//             quantity: item.count,
//             transaction_id: req.body.order.transaction_id,
//             amount: req.body.order.amount
//         });
//     });

//     User.findOneAndUpdate({_id: req.profile._id}, {$push: {history: history}}, {new: true}, (error, data) => {
//         if(error) {
//             return res.status(400).json({
//                 error: 'Could not update user purchase history'
//             });
//         }
//         next();
//     })
// };

// exports.purchaseHistory = (req, res) => {
//     Order.find({user: req.profile._id})
//     .populate('user', '_id name')
//     .sort('-created')
//     .exec((err, orders) => {
//         if(err) {
//             return res.status(400).json({
//                 error: errorHandler(err)
//             });
//         }
//         res.json(orders);
//     });
// };