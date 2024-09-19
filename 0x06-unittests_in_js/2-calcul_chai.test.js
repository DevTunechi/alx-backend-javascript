const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber with Chai', () => {
    describe('SUM operation', () => {
        it('should return 6 when type is SUM and inputs are 1.4 and 4.5', () => {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });
    });

    describe('SUBTRACT operation', () => {
        it('should return -4 when type is SUBTRACT and inputs are 1.4 and 4.5', () => {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });
    });

    describe('DIVIDE operation', () => {
        it('should return 0.2 when type is DIVIDE and inputs are 1.4 and 4.5', () => {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        });

        it('should return "Error" when type is DIVIDE and inputs are 1.4 and 0', () => {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });
    });

    describe('Invalid operation', () => {
        it('should throw an error for an invalid operation type', () => {
            expect(() => calculateNumber('INVALID', 1.4, 4.5)).to.throw('Invalid operation type');
        });
    });
});
