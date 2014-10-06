'use strict';

var assert = require('assert');
var path   = require('path');
var ito    = require(path.join(__dirname, '..', 'ito.js'));

describe('._formatHeader', function() {
  it('should return a formatted header', function() {
    var header         = ito._formatHeader('Header');
    var expectedHeader = 'Header' + '\n' +
                         '======';

    assert.strictEqual(header, expectedHeader, 'Header formatted.');
  })
});

describe('._formatSubHeader', function() {
  it('should return a formatted subheader', function() {
    var subHeader         = ito._formatSubHeader('Subheader');
    var expectedSubHeader = 'SUBHEADER';

    assert.strictEqual(subHeader, expectedSubHeader, 'Subheader formatted.');
  })
});

describe('._formatNumberedList', function() {
  it('should return a formatted table of contents', function() {
    var numberedList         = ito._formatNumberedList(['Dragons', 'Puppies', 'Kittens', 'Pokemanz']);
    var expectedNumberedList = '1. Dragons' + '\n' +
                               '2. Puppies' + '\n' +
                               '3. Kittens' + '\n' +
                               '4. Pokemanz';

    assert.strictEqual(numberedList, expectedNumberedList, 'Numbered List formatted.');
  })
});
