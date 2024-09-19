const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function() {
  let spyConsole;

  beforeEach(function() {
    // Spy on console.log
    spyConsole = sinon.spy(console, 'log');
  });

  afterEach(function() {
    // Restore the original methods
    spyConsole.restore();
  });

  it('should log the correct message with 100 and 20', function() {
    sendPaymentRequestToApi(100, 20);

    // Verify the console log message
    expect(spyConsole.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('should log the correct message with 10 and 10', function() {
    sendPaymentRequestToApi(10, 10);

    // Verify the console log message
    expect(spyConsole.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});

