'use strict';

var ito = {
  header: function(header) {
    var headerBorder    = new Array(header.length + 1).join('=');
    var formattedHeader = header + '\n' +
                          headerBorder;

    return formattedHeader;
  },

  subHeader: function(subheader) {
    var formattedSubheader = subheader.toUpperCase();

    return formattedSubheader;
  },

  tableOfContents: function(contents) {
    for(var i=0; i<contents.length; i++) {
      var tableNumber = (i + 1) + '. ' ;

      contents[i] = tableNumber + contents[i];
    };

    var formattedTableOfContents = contents.join('\n');

    return formattedTableOfContents;
  }
};

module.exports = ito;
