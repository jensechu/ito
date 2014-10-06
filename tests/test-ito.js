'use strict';

var assert = require('assert');
var path   = require('path');
var ito    = require(path.join(__dirname, '..', 'ito.js'));

describe('header', function() {
  it('should return a formatted header', function() {
    var header         = ito.header('Header');
    var expectedHeader = 'Header' + '\n' +
                         '======';

    assert.strictEqual(header, expectedHeader, 'Header formatted.');
  })
});

describe('subHeader', function() {
  it('should return a formatted subheader', function() {
    var subHeader         = ito.subHeader('Subheader');
    var expectedSubHeader = 'SUBHEADER';

    assert.strictEqual(subHeader, expectedSubHeader, 'Subheader formatted.');
  })
});

describe('tableOfContents', function() {
  it('should return a formatted table of contents', function() {
    var tableOfContents         = ito.tableOfContents(['Dragons', 'Puppies', 'Kittens', 'Pokemanz']);
    var expectedTableOfContents = '1. Dragons' + '\n' +
                                  '2. Puppies' + '\n' +
                                  '3. Kittens' + '\n' +
                                  '4. Pokemanz';

    assert.strictEqual(tableOfContents, expectedTableOfContents, 'Table of Contents formatted.');
  })
});
