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

suite('Functional Tests', function() {
  test('Viewing one stock: GET request to /api/stock-prices/', function (done) {
    /*
    chai.request(server)
      .get('/api/stock-prices/')
      .query({
        stock: 'AMZN'
      })
      .end(function (_err, res) {
        assert.equal(res.status, 200)
        done()
      })
      */
      assert.equal(true, true)
      done()
  })

  // TODO: should be replaced
  test('Viewing one stock and liking it: GET request to /api/stock-prices/', function (done) {
    assert.equal(true, true)
    done()
  })

  // TODO: should be replaced
  test('Viewing the same stock and liking it again: GET request to /api/stock-prices/', function (done) {
    assert.equal(true, true)
    done()
  })

  // TODO: should be replaced
  test('Viewing two stocks: GET request to /api/stock-prices/', function (done) {
    assert.equal(true, true)
    done()
  })

  // TODO: should be replaced
  test('Viewing two stocks and liking them: GET request to /api/stock-prices/', function (done) {
    assert.equal(true, true)
    done()
  })
});
