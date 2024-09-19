const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', function() {
  it('should return a successful response when success is true', function(done) {
    getPaymentTokenFromAPI(true)
      .then(response => {
        // Verify the response
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Indicate that the async test has completed
      })
      .catch(err => done(err)); // If an error occurs, pass it to done
  });

  it('should not return a response when success is false', function(done) {
    getPaymentTokenFromAPI(false)
      .then(response => {
        // No response should be returned, so this should be an unexpected result
        done(new Error('Expected no response but got one'));
      })
      .catch(() => {
        // If the promise is rejected (i.e., no response), the test passes
        done();
      });
  });
});

