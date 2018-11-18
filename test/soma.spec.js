const { expect } = require('code');
const { it } = exports.lab = require('lab').script();

const { somar } = require('../soma');

it('a soma de 2 + 3 deve ser 5', () => {
	expect(somar(2, 3)).to.equal(5);
});

it('a soma de 0 + 0 deve ser 0', () => {
	expect(somar()).to.equal(0);
});
