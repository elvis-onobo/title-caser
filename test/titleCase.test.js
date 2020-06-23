const titleCase = require('../lib/titleCase')

const titleCasedString = 'My Name Is Elvis Onobo'

test('Converts badly formated string to title-case', () => {
	const res = titleCase('my name is elvis onobo')
	expect(res).toBe(titleCasedString);
})