const supertest = require('supertest');
const evn = require('dotenv').config();
let api = supertest(process.env.BASE_URL)


let getMovieList = (key, search ) => api.get('')
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .query({apikey:key, s: search})

module.exports = {
    getMovieList
}