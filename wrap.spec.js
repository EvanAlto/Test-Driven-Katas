const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
    it('Returns empty string if empty string was provided', () => {
        expect(wrap("", 10)).to.equal("");
    });
    it('Returns a string wrapped at provided line length', () => {
        expect(wrap('a house on fire',10)).to.equal('a house on\n fire');
    })
    it('Returns normal string if maxLength is greater than string length', () => {
        expect(wrap('I cannot think of anything', 50)).to.equal('I cannot think of anything');
    })
    it('does not wrap on non-space characters', () => {
        expect(wrap('test the implementation', 10)).to.equal('test the\nimplement\nation');
    })
});