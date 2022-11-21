const router = require('../routes/');
const controllers = require('../controllers')

module.exports = (app) => {

    app.use('/api/user', router.user);

    app.use('/api/product', router.product);

    app.use('/contact', router.contact);

    app.get("/create/product",controllers.create.product.get);
    app.post("/create/product",controllers.create.product.post);

    app.get("/edit/product/:id",controllers.product.get);

    app.put("/edit/product/:id",controllers.product.put);

    app.get("/details/product/:id",controllers.product.product.getOneProduct); //give details about specific cube


    app.use('*', (req, res, next) => res.send('<h1> Something went wrong. Try again. :thumbsup: </h1>'))
};