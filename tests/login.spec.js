import supertest from 'supertest';
const api = supertest('https://api.ebay.com');
require('dotenv').config()
console.log(process.env);
describe('Login to eBay Sandbox API', () => {

    it('login to api ', (done) => {



        console.log('clap');

        done();

    })


});