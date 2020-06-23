/*
 * Copyright(c) 2020, Elvis Onobo
 * Twitter: elvis_onobo
 * elvis.onobo@gmail.com
 */

'use strict'

/**
 * Converts a string to title-case
 */
const titleCase = function (str) {
	return str.toLowerCase().split(' ').map(function (word) {
		return word.replace(word[0], word[0].toUpperCase());
	}).join(' ');
}

/*
 * Exports
 */
module.exports = titleCase