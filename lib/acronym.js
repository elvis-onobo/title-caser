/*
 * Copyright(c) 2020, Elvis Onobo
 * Twitter: elvis_onobo
 * elvis.onobo@gmail.com
 */

"use strict";

/**
 * Makes an acrony out of the first letters of every word in a sentence
 */
const acronym = function (str, start, stop) {
  start = start || 0;
  stop = stop || 0;

  let result;

  result = str
    .split(" ")
    .map((item) => item[0].toUpperCase())
    .join("");

  if (start > 0 || stop > 0) {
    if (start > stop || start == stop) {
      throw Error(
        "start parameter cannot be greater or equal to stop parameter"
      );
    } else {
      result = result.substr(start, stop);
      return result;
    }
  }
  return result;
};

module.exports = acronym;
