/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-squirejs',
  included: function (app) {
    if (app.tests) {
      app.import('bower_components/squirejs/index.js', {
        type: 'test'
      });
    }
  }
};
