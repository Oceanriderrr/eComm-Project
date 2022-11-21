const controllers = require('../controllers/');


const router = require('express').Router();

router.get('/', controllers.user.get);

router.get('/:id', controllers.user.getOne); 

router.post('/register', controllers.user.post.register);

router.post('/login', controllers.user.post.login);

router.post('/logout', controllers.user.post.logout);

router.put('/:id', controllers.user.put);

router.delete('/:id', controllers.user.delete);



module.exports = router;

// const express = require("express");
// const router = express.Router();

// const { requireSignin, isAdmin, isAuth } = require('../controllers/auth');
// const { userById, read, update, purchaseHistory } = require('../controllers/user');

// router.get('/secret/:userId', requireSignin, isAuth, isAdmin, (req, res) => {
//     res.json({
//         user: req.profile
//     });
// });

// router.get('/user/:userId', requireSignin, isAuth, read);
// router.put('/user/:userId', requireSignin, isAuth, update);
// router.get('/orders/by/user/:userId', requireSignin, isAuth, purchaseHistory);

// router.param('userId', userById);

// module.exports = router;