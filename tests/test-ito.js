'use strict';

var assert = require('assert');
var path   = require('path');
var ito    = require(path.join(__dirname, '..', 'ito.js'));

describe('._formatHeader', function() {
  it('should return a formatted header', function() {
    var header         = ito._formatHeader('Header');
    var expectedHeader = 'Header' + '\n' +
                         '======';

    assert.strictEqual(header, expectedHeader, 'Header was not properly formatted');
  })
});

describe('._formatSubHeader', function() {
  it('should return a formatted subheader', function() {
    var subHeader         = ito._formatSubHeader('Subheader');
    var expectedSubHeader = 'SUBHEADER';

    assert.strictEqual(subHeader, expectedSubHeader, 'Subheader was not properly formatted.');
  })
});

describe('._formatNumberedList', function() {
  it('should return a formatted numbered list', function() {
    var numberedList         = ito._formatNumberedList(['Dragons', 'Puppies', 'Kittens', 'Pokemanz']);
    var expectedNumberedList = '1. Dragons' + '\n' +
                               '2. Puppies' + '\n' +
                               '3. Kittens' + '\n' +
                               '4. Pokemanz';

    assert.strictEqual(numberedList, expectedNumberedList, 'Numbered List was not properly formatted.');
  })
});

describe('._formatBulletList', function() {
  it('should return a formatted bullet list', function() {
    var bulletList         = ito._formatBulletList(['Dragons', 'Puppies', 'Kittens', 'Pokemanz']);
    var expectedBulletList = '\u2022 Dragons' + '\n' +
                             '\u2022 Puppies' + '\n' +
                             '\u2022 Kittens' + '\n' +
                             '\u2022 Pokemanz';

    assert.strictEqual(bulletList, expectedBulletList, 'Bullet List was not properly formatted.');
  })
});

describe('._formatCustomList', function() {
  it('should return a formatted list with heart bullets', function() {
    var heartList         = ito._formatCustomList('\u2665', ['Dragons', 'Puppies', 'Kittens', 'Pokemanz']);
    var expectedHeartList = '\u2665 Dragons' + '\n' +
                            '\u2665 Puppies' + '\n' +
                            '\u2665 Kittens' + '\n' +
                            '\u2665 Pokemanz';

    assert.strictEqual(heartList, expectedHeartList, 'Custom Heart List was not properly formatted.');
  });

  it('should return a formatted list with star bullets', function() {
    var starList         = ito._formatCustomList('\u2605', ['Dragons', 'Puppies', 'Kittens', 'Pokemanz']);
    var expectedStarList = '\u2605 Dragons' + '\n' +
                           '\u2605 Puppies' + '\n' +
                           '\u2605 Kittens' + '\n' +
                           '\u2605 Pokemanz';

    assert.strictEqual(starList, expectedStarList, 'Custom Star List was not properly formatted.');
  });
});

describe('._formatDivider', function() {
  it('should return a formatted divider', function() {
    var divider         = ito._formatDivider();
    var expectedDivider = '\n //============================== \n';

    assert.strictEqual(divider, expectedDivider, 'Divider was not properly formatted.');
  });
});

describe('._formatCustomDivider', function() {
  it('should return a formatted divider with a heart', function() {
    var heartDivider         = ito._formatCustomDivider('\u2665');
    var expectedHeartDivider = '\n //=============================\u2665 \n';

    assert.strictEqual(heartDivider, expectedHeartDivider, 'Heart Divider was not properly formatted.');
  });

  it('should return a formatted divider with a star', function() {
    var starDivider         = ito._formatCustomDivider('\u2605');
    var expectedStarDivider = '\n //=============================\u2605 \n';

    assert.strictEqual(starDivider, expectedStarDivider, 'Star Divider was not properly formatted.');
  });
});
