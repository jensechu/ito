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
    var tableRows = contents.map(function (row, i) {
      var rowNumber = (i + 1) + '. ';
      return rowNumber + row;
    });
    var formattedTableOfContents = tableRows.join('\n');

    return formattedTableOfContents;
  }
};

module.exports = ito;
