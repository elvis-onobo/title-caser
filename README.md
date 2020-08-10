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

You can choose where you want to start and stop creating your acronym with optional parameter like so:

`TitleCaser.acronym(string, start, stop)`

`TitleCaser.acronym('my name is elvis onobo', 0, 3)`

### Output:

`MNI`

### Contribution

You are welcome to improve the package. Be sure to add testing as appropriate.
The package uses Jest for testing.

# Licence

**MIT**
