const { expect } = require('code');
const { it } = exports.lab = require('lab').script();

it('a soma de 1 + 1 deve ser 2', () => {
	expect(1 + 1).to.equal(2);
});
