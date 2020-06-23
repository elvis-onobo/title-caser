'use strict'

const titleCase = require('./lib/titleCase')

/**
 * Bundle all the methods into one object
 */
const TitleCaser = {
	titleCase
}

console.log(TitleCaser.titleCase('my name is elvis onobo'))

/*
 * Exports
 */
module.exports = TitleCaser