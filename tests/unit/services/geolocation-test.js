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
  // var service = this.subject();
  // var done = false;
  // service.on('test', function() {
  //   // ok(true, "event occures");
  //   done = true;
  // });

  // andThen(function() {
  //   ok(find("#post"), "A post exists");
  // });

  ok(true);
});


// Replace this with your real tests.
// test('it returns an GeoPosition Object after 500>=x>=1000 ms', function() {
//   var service = this.subject();
//   service.start();
//   ok(typeof service.start === "function", "start method exists" );
//   ok(typeof service.stop === "function", "stop method exists" );
// });
