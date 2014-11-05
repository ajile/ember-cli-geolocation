import Ember from 'ember';
import GeolocationMixinMixin from '../../../mixins/geolocation-mixin';

module('GeolocationMixin');

// Replace this with your real tests.
test('it works', function() {
  var GeolocationMixinObject = Ember.Object.extend(GeolocationMixinMixin);
  var subject = GeolocationMixinObject.create();
  ok(subject);
});

// Replace this with your real tests.
test('it doesn\'t permit to set position property', function() {
  var GeolocationMixinObject = Ember.Object.extend(GeolocationMixinMixin);
  var subject = GeolocationMixinObject.create();
  throws(function() {
  	subject.set('position');
  }, 'The property position should be read-only');
});
