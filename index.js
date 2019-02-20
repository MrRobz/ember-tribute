'use strict';

module.exports = {
  name: require('./package').name,

  included: function (app) {
    this._super.included.apply(this, arguments);
    
    let hasSass = !!app.registry.availablePlugins['ember-cli-sass'];

    if (!hasSass) {
      app.import('vendor/tribute.css');
    }
  }
};
