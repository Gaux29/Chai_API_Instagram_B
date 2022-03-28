process.env.NODE_ENV = "test"
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../index');
const productModel = require('../models/product.model');

describe('Product tests', ()=> {

    let product_id_1;
    let product_id_2;

    before(async () => {

        await productModel.deleteMany({});

        let product_1 = new productModel({
            name: "test",
            price: 123,
            description: "test",
            reviews: []
        });
        
        let product_2 = new productModel({
            name: "test",
            price: 123,
            description: "test",
            reviews: []
        });
        await product_1.save();  
        await product_2.save();

        product_id_1 = product_1._id.toString();
        product_id_2 = product_2._id.toString();

    })

    it('should return all products', async() => {
        await request(app).get('/products')
        .then((res) => {
            const body = res.body;
            let matcher = [
                {
                    _id: product_id_1,
                    name: "test",
                    price: 123,
                    description: "test",
                    reviews: []
                },
                {
                    _id: product_id_2,
                    name: "test",
                    price: 123,
                    description: "test",
                    reviews: []
                }
            ]
            expect(res.status).to.equal(200);
            expect(res.body.products).to.deep.equal(matcher);
            console.log(body);
        })
    })

    it('should add a product', async () => {
        await request(app).post('/products')
        .send({
            name: "test product",
            price: 999,
            description: "test",
            reviews: []
        })
        .then((res) => {
            let product = res.body.savedProduct;
            expect(res.status).to.equal(200);
            expect(product).to.contain.property('_id');
            expect(product.name).to.equal("test product");
            expect(product.price).to.equal(999);
            expect(product.description).to.equal("test");
            expect(product.reviews).to.deep.equal([]);
        })
        .catch((err) => {
            console.log(err);
        })
    })
})
