const { expect } = require('code');
const { it } = exports.lab = require('lab').script();

it('a soma de 2 + 3 deve ser 5', () => {
	expect(somar(2, 3)).to.equal(5);
});
