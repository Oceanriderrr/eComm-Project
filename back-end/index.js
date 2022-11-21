const config = require('./config/config');
const dbConnection = require('./config/database');

const app = require('express')();

dbConnection().then(() => {

    require('./config/express')(app);

    require('./config/routes')(app);

    app.use(function (err, req, res, next) {
        console.error(err);
        res.status(500).send(err.message);
        console.log('*'.repeat(90))
    });

    app.listen(config.port, console.log(`Listening on port ${config.port}!`))

}).catch(console.error);




// const express = require('express');
// const mongoose = require('mongoose');
// const morgan = require('morgan');
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
// const cors = require('cors');
// const expressValidator = require('express-validator');
// require('dotenv').config();

// //import routes
// const authRoutes = require('./routes/auth');
// const userRoutes = require('./routes/user');
// const categoryRoutes = require('./routes/category');
// const productRoutes = require('./routes/product');
// const braintreeRoutes = require('./routes/braintree');
// const orderRoutes = require('./routes/order');

// //app
// const app = express();

// //db
// mongoose.connect(process.env.DATABASE, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// }).then(() => console.log("DB Connected"))

// //middleware
// app.use(morgan('dev'));
// app.use(bodyParser.json());
// app.use(cookieParser());
// app.use(expressValidator());
// app.use(cors());


// //routes middleware
// app.use("/api", authRoutes);
// app.use("/api", userRoutes);
// app.use("/api", categoryRoutes);
// app.use("/api", productRoutes);
// app.use("/api", braintreeRoutes);
// app.use("/api", orderRoutes);

// const port = process.env.PORT || 8000

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`)
// })