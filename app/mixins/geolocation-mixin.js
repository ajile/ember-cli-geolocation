import Ember from 'ember';

var mixin = Ember.Mixin.create({

    /**
      Geoposition object created by geolocation service.

      @property position
      @type Object
      @default null
    */
    position: Ember.computed.alias('geolocation.geoposition').readOnly()

});

export default mixin;