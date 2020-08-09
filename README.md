# [Title-caser](https://www.npmjs.com/package/title-caser)

Convert any string text to title-case using this package
Search on NPM or just use the link: [Title-caser](https://www.npmjs.com/package/title-caser)

### Installation

To install the Title-caser package run the code below in your terminal

`npm i title-caser`

### Usage

`const TitleCaser = require('title-caser')`

`TitleCaser.titleCase('my name is elvis onobo')`

### Output:

`My Name Is Elvis Onobo`

You can also use this package to create acronyms from strings on the fly. For example:

`TitleCaser.acronym('my name is elvis onobo')`

### Output:

`MNIEO`

If the acronym is too long, you can reduce it from the end by adding an optional parameter like so:

`TitleCaser.acronym('my name is elvis onobo', 2)`

### Output:

`MNI`

### Contribution

You are welcome to improve the package. Be sure to add testing as appropriate.
The package uses Jest for testing.

# Licence

**MIT**
