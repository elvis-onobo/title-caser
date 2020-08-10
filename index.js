"use strict";

const titleCase = require("./lib/titleCase");
const acronym = require("./lib/acronym");

/**
 * Bundle all the modules into one object
 */
const TitleCaser = {
  titleCase,
  acronym,
};

// console.log(TitleCaser.acronym("my name is elvis onobo", 0, 3));

/*
 * Exports
 */
module.exports = TitleCaser;
