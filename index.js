'use strict'

const titleCase = require('./lib/titleCase')

/**
 * Bundle all the methods into one object
 */
const TitleCaser = {
	titleCase
}

TitleCaser.titleCase('I AM GING HOME')

/*
 * Exports
 */
module.exports = TitleCaser