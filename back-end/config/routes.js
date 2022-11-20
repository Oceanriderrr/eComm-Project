const router = require('../routes/');
const controllers = require('../controllers')

module.exports = (app) => {

    app.use('/api/user', router.user);

    app.use('/api/product', router.product);

    app.get("/create/product",controllers.create.product.get);
    app.post("/create/product",controllers.create.product.post);


    app.use('*', (req, res, next) => res.send('<h1> Something went wrong. Try again. :thumbsup: </h1>'))
};