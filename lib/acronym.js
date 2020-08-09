/*
 * Copyright(c) 2020, Elvis Onobo
 * Twitter: elvis_onobo
 * elvis.onobo@gmail.com
 */

"use strict";

/**
 * Makes an acrony out of the first letters of every word in a sentence
 */
const acronym = function (str, val) {
  val = val || 0;

  let result;

  result = str
    .split(" ")
    .map((item) => item[0].toUpperCase())
    .join("");

  if (val > 0) {
    result = result.substr(0, result.length - val);
    return result;
  }
  return result;
};

module.exports = acronym;
