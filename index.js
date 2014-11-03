'use strict';

module.exports = {
  name: 'ember-cli-geolocation',
  included: function(app) {
    this._super.included(app);
    app.import('bower_components/geoPosition/js/geoPosition.js');
  }
};
