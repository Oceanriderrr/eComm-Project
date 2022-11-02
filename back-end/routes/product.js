const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.product.get);

router.get('/one/:id', controllers.product.getOne);

router.post('/', auth(), controllers.product.post);

router.put('/:id', auth(), controllers.product.put);

router.delete('/:id', auth(), controllers.product.delete);

module.exports = router;