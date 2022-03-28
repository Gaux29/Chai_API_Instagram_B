const express = require('express');
const port = 8000;
const app = express();

//Database configuration
require('./configs/mongodb.config');

//Route constants
const productRoute = require('./routes/product.route');
const userRoute = require('./routes/user.route');
const orderRoute = require('./routes/order.route');
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

const swaggerOptions = {
    definition: {
        info: {
            title: 'API-101',
        },
    },
    apis: ['index.js', './documentation/*.yml'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/products', productRoute);
app.use('/users', userRoute);
app.use('/orders', orderRoute);

app.get('/', (req, res) => {
    res.send("This is our API-101 session.");
})

app.listen(port, () => {
    console.log(`Server running at port ` + port);
});

module.exports = app;