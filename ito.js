'use strict';

(function(module) {

  var config = {
    divider: {
      length: 30,
      symbol: '=',
    },
    list: {
      bullet: '\u2022'
    },
    out: console.log,
  };

  var bar = function(len) {
    return new Array(len).join(config.divider.symbol);
  }

  var format = {
    divider: function(text) {
      if (text == undefined) {
        text = ''
      }

      var len = config.divider.length - text.length + 1;
      return '\n //' + bar(len) + text + ' \n';
    },

    header: function(header) {
      return header + '\n' + bar(header.length + 1);
    },

    list: function(bullet, contents) {
      if (typeof bullet !== 'string') {
        contents = bullet;
        bullet   = config.list.bullet;
      }

      var rows = contents.map(function(row) {
        return bullet + ' ' + row;
      });
      return rows.join('\n');
    },

    numberedList:  function(contents) {
      var rows = contents.map(function (row, i) {
        return (i + 1) + '. ' + row;
      });

      return rows.join('\n');
    },

    subHeader: function(subheader) {
      return subheader.toUpperCase();
    }
  };

  var ito = {
    config: config,

    customDivider: function(label) {
      config.out(format.divider(label));
    },

    customList: function(bullet, contents) {
      config.out(format.list(bullet, contents));
    },

    divider: function() {
      config.out(format.divider());
    },

    header: function(header) {
      config.out(format.header(header));
    },

    list: function(contents) {
      config.out(format.list(contents));
    },

    numberedList: function(contents) {
      config.out(format.numberedList(contents));
    },

    subHeader: function(subheader) {
      config.out(format.subHeader(subheader));
    }
  };

  module.exports = ito;
})(module);
