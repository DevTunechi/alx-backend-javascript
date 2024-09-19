const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function() {
  let stubCalculate;
  let spyConsole;

  beforeEach(function() {
    // Stub Utils.calculateNumber
    stubCalculate = sinon.stub(Utils, 'calculateNumber').returns(10);
    // Spy on console.log
    spyConsole = sinon.spy(console, 'log');
  });

  afterEach(function() {
    // Restore the original methods
    stubCalculate.restore();
    spyConsole.restore();
  });

  it('should call Utils.calculateNumber with SUM, 100, 20', function() {
    sendPaymentRequestToApi(100, 20);

    // Check that the stub was called with the right arguments
    expect(stubCalculate.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Verify console.log message
    expect(spyConsole.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});
