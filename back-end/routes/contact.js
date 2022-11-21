const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.product.get);

router.post('/contact', auth(), controllers.contactForm.contact.post)



module.exports = router;