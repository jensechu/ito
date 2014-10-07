'use strict';

var ito = {
  _formatHeader: function(header) {
    var headerBorder    = new Array(header.length + 1).join('=');
    var formattedHeader = header + '\n' +
                          headerBorder;

    return formattedHeader;
  },

  _formatSubHeader: function(subheader) {
    var formattedSubheader = subheader.toUpperCase();

    return formattedSubheader;
  },

  _formatNumberedList: function(contents) {
    var tableRows = contents.map(function (row, i) {
      var rowNumber = (i + 1) + '. ';
      return rowNumber + row;
    });

    var formattedNumberedList = tableRows.join('\n');

    return formattedNumberedList;
  },

  _formatBulletList: function(contents) {
    var tableRows = contents.map(function(row) {
      return '\u2022 ' + row;
    });

    var formattedBulletList = tableRows.join('\n');

    return formattedBulletList;
  },

  _formatCustomList: function(listType, contents) {
    var tableRows = contents.map(function(row) {
      return listType + ' ' + row;
    });

    var formattedCustomList = tableRows.join('\n');

    return formattedCustomList;

  }
};

module.exports = ito;
