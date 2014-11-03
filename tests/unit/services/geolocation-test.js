import {
  moduleFor,
  test
} from 'ember-qunit';
import Ember from 'ember';

moduleFor('service:geolocation', 'GeolocationService', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Replace this with your real tests.
test('it exists', function() {
  var service = this.subject();
  service.stop();
  ok(service);
});

test('it contain methods', function() {
  expect(2);
  var service = this.subject();
  ok(typeof service.start === "function", "start method exists" );
  ok(typeof service.stop === "function", "stop method exists" );
});

test('it evented object', function() {
  var service = this.subject();
  expect(1);

  service.on('test', function() {
  	ok(true, "event occured");
  });

  service.trigger('test');
});

// test('it returns an GeoPosition Object more then 3 times', function() {
// 	expect(1);
// 	var service = this.subject();

// 	service.getGeoposition().then(function() {
// 		console.log(123);
// 		ok(true);
// 	});
// });
