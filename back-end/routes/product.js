const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.product.get);

router.post('/create/product', auth(), controllers.product.post.createProduct)

router.get('/details/product/:id', controllers.product.product.getOneProduct);

router.get('/edit/product/:id', controllers.product.product.getOneProduct);

router.post('/', auth(), controllers.product.post.createProduct);

router.put('/:id', auth(), controllers.product.put);

router.delete('/:id', auth(), controllers.product.delete);

module.exports = router;