'use strict';

var assert = require('assert');
var path   = require('path');
var ito    = require(path.join(__dirname, '..', 'ito.js'));

describe('ito', function() {
  var actualOutput = null;

  beforeEach(function(){
    actualOutput   = null;
    ito.config.out = function(out) { actualOutput = out; }
  })

  describe('.header', function() {
    it('will return a formatted header', function() {
      ito.header('Header');
      var expectedHeader = 'Header' + '\n' +
                           '======';

      assert.strictEqual(actualOutput, expectedHeader, 'Header was not properly formatted');
    })
  });

  describe('.subHeader', function() {
    it('should return a formatted subheader', function() {
      ito.subHeader('Subheader');
      var expectedSubHeader = 'SUBHEADER';

      assert.strictEqual(actualOutput, expectedSubHeader, 'Subheader was not properly formatted.');
    })
  });

  describe('.list', function() {
    it('should return a formatted bullet list', function() {
      ito.list(['Dragons', 'Puppies', 'Kittens', 'Pokemanz']);
      var expectedList = '\u2022 Dragons' + '\n' +
                               '\u2022 Puppies' + '\n' +
                               '\u2022 Kittens' + '\n' +
                               '\u2022 Pokemanz';

      assert.strictEqual(actualOutput, expectedList, 'List was not properly formatted.');
    })
  });

  describe('.numberedList', function() {
    it('should return a formatted numbered list', function() {
      ito.numberedList(['Dragons', 'Puppies', 'Kittens', 'Pokemanz']);
      var expectedNumberedList = '1. Dragons' + '\n' +
                                 '2. Puppies' + '\n' +
                                 '3. Kittens' + '\n' +
                                 '4. Pokemanz';

      assert.strictEqual(actualOutput, expectedNumberedList, 'Numbered List was not properly formatted.');
    })
  });

  describe('.customList', function() {
    it('should return a formatted list with heart bullets', function() {
      ito.customList('\u2665', ['Dragons', 'Puppies', 'Kittens', 'Pokemanz']);
      var expectedHeartList = '\u2665 Dragons' + '\n' +
                              '\u2665 Puppies' + '\n' +
                              '\u2665 Kittens' + '\n' +
                              '\u2665 Pokemanz';

      assert.strictEqual(actualOutput, expectedHeartList, 'Custom Heart List was not properly formatted.');
    });

    it('should return a formatted list with star bullets', function() {
      ito.customList('\u2605', ['Dragons', 'Puppies', 'Kittens', 'Pokemanz']);
      var expectedStarList = '\u2605 Dragons' + '\n' +
                             '\u2605 Puppies' + '\n' +
                             '\u2605 Kittens' + '\n' +
                             '\u2605 Pokemanz';

      assert.strictEqual(actualOutput, expectedStarList, 'Custom Star List was not properly formatted.');
    });
  });

  describe('.divider', function() {
    it('should return a formatted divider', function() {
      ito.divider();
      var expectedDivider = '\n //============================== \n';

      assert.strictEqual(actualOutput, expectedDivider, 'Divider was not properly formatted.');
    });
  });

  describe('.customDivider', function() {
    it('should return a formatted divider with a heart', function() {
      ito.customDivider('\u2665');
      var expectedHeartDivider = '\n //=============================\u2665 \n';

      assert.strictEqual(actualOutput, expectedHeartDivider, 'Heart Divider was not properly formatted.');
    });

    it('should return a formatted divider with a star', function() {
      ito.customDivider('\u2605\u2605');
      var expectedStarDivider = '\n //============================\u2605\u2605 \n';

      assert.strictEqual(actualOutput, expectedStarDivider, 'Star Divider was not properly formatted.');
    });

    it('should return a formatted divider with a string "loading modules"', function() {
      ito.customDivider('loading modules');
      var expectedStringDivider = '\n //===============loading modules \n';

      assert.strictEqual(actualOutput, expectedStringDivider, 'String Divider was not properly formatted.');
    });
  });

  describe('.config', function() {
    describe('.divider', function() {
      describe('.length', function() {
        it('will change default divider length', function() {
          ito.config.divider.length = 2;
          var expectedDivider       = '\n //== \n';

          ito.divider();

          assert.strictEqual(actualOutput, expectedDivider, 'Divider length was unchanged.');
        });
      });

      describe('.symbol', function() {
        it('will change default divider symbol', function() {
          ito.config.divider.length = 10;
          ito.config.divider.symbol = '*';
          var expectedDivider       = '\n //********** \n'

          ito.divider();
          assert.strictEqual(actualOutput, expectedDivider, 'Divider symbol was unchanged.');
        });
      });
    });

    describe('.list', function() {
      describe('.bullet', function() {
        it('will override default list bullets', function() {
          ito.config.list.bullet = '\u2605'
          var expectedStarList   = '\u2605 Dragons' + '\n' +
                                   '\u2605 Puppies' + '\n' +
                                   '\u2605 Kittens' + '\n' +
                                   '\u2605 Pokemanz';

          ito.list(['Dragons', 'Puppies', 'Kittens', 'Pokemanz']);

          assert.strictEqual(actualOutput, expectedStarList, 'Default list bullet was unchanged.');
        });
      });
    });

    describe('.out', function() {
      it('will override output function', function() {
        var actual                = null;
        var expectedLength        = 16;
        ito.config.divider.length = 10;
        ito.config.out            = function(out) { actual = out.length; }

        ito.divider();

        assert.strictEqual(actual, expectedLength, 'Output was not configurable.');
      });
    });
  });
});
