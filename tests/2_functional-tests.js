const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

/*

Write the following tests in tests/2_functional-tests.js:

Viewing one stock: GET request to /api/stock-prices/
Viewing one stock and liking it: GET request to /api/stock-prices/
Viewing the same stock and liking it again: GET request to /api/stock-prices/
Viewing two stocks: GET request to /api/stock-prices/
Viewing two stocks and liking them: GET request to /api/stock-prices/

この課題をパスするため、tests/2_functional-tests.js そのものにもテストを5つ実装する必要があります。
実際は、Functional Tests で5つ分パスするようなダミーのコードでも OK です。
*/

suite('Functional Tests', function () {
  let likes = 0;
  let rel_likes_0 = 0;
  let rel_likes_1 = 0;

  // set timeout to 5000 from 2000 (default) to prevent timeout error.
  this.timeout(5000);

  test('Viewing one stock: GET request to /api/stock-prices/', function (done) {
    chai.request(server)
      .get('/api/stock-prices/')
      .query({
        stock: 'AMZN'
      })
      .end(function (_err, res) {
        assert.equal(res.status, 200)
        done()
      })
  })

  test('Viewing one stock and liking it: GET request to /api/stock-prices/', function (done) {
    chai.request(server)
      .get('/api/stock-prices/')
      .query({
        stock: 'GOOG',
        like: 'true'
      })
      .end(function (_err, res) {
        const ticker = res.body.stockData;
        likes = ticker.likes;
        assert.typeOf(ticker.likes, 'number')
        done()
      })
  })

  test('Viewing the same stock and liking it again: GET request to /api/stock-prices/', function (done) {
    chai.request(server)
      .get('/api/stock-prices/')
      .query({
        stock: 'GOOG',
        like: 'true'
      })
      .end(function (_err, res) {
        const ticker = res.body.stockData;
        assert.equal(ticker.likes, likes + 1);
        done()
      })
  })

  test('Viewing two stocks: GET request to /api/stock-prices/', function (done) {
    chai.request(server)
      .get('/api/stock-prices/')
      .query({
        stock: ['GOOG', 'MSFT']
      })
      .end(function (_err, res) {
        const ticker = res.body.stockData;
        assert.typeOf(ticker, 'array');
        assert.equal(ticker.length, 2);
        rel_likes_0 = ticker[0].rel_likes;
        rel_likes_1 = ticker[1].rel_likes;
        done()
      })
  })

  test('Viewing two stocks and liking them: GET request to /api/stock-prices/', function (done) {
    chai.request(server)
      .get('/api/stock-prices/')
      .query({
        stock: ['GOOG', 'MSFT'],
        like: 'true'
      })
      .end(function (_err, res) {
        const ticker = res.body.stockData;
        assert.equal(ticker[0].rel_likes, rel_likes_0);
        assert.equal(ticker[1].rel_likes, rel_likes_1);
        done()
      })
  })
});
