let mongoose = require("mongoose");

let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('Product', () => {
    
    describe('/GET Product', () => {
        it('GET all products', (done) => {
            chai.request('http://localhost:8080')
                .get('/noauth/products')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                  done();
                });
        });
    });
    /*
    describe('/POST Category', () => {
        it('POST category', (done) => {
            let category = {
                name: "testw", 
                status: "true"
            }
              chai.request('http://localhost:8080')
              .post('/noauth/categories')
              .send(category)
              .end((err, res) => {
                  res.should.have.status(200);
                done();
              });
        });

    });

    describe('/GET/:id category', () => {
        it('GET category ID', (done) => {
            let id_ = "6064a8769978cd66e0e2e28f"; //id que existe
              chai.request('http://localhost:8080')
              .get('/noauth/categories/' + id_)
              .end((err, res) => {
                  res.should.have.status(200);
                done();
              });
  
        });
    });
    */
});