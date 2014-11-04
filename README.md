# ember-cli-geolocation [![Build Status](https://secure.travis-ci.org/ajile/ember-cli-geolocation.svg)](http://travis-ci.org/ajile/ember-cli-geolocation)

Addon provides property into routes and controllers to get geo-location information (e.g. coords.)

## Installation

```
npm install --save-dev ember-cli-geolocation
ember generate ember-cli-geolocation
```

## Usage
Available as mixin, you can use like that:
```javascript
import Ember from 'ember';
import GeoLocationMixin from 'ember-cli-geolocation/mixins/geolocation-mixin';

// Some controller
export default Ember.Controller.extend(GeoLocationMixin, {

    // Init method for example
    init: function() {
        this._super();

        // Begin geo location inquiry
        this.get('geolocation').start();

        // For example use interval function (every 1s), because
        // geolocation become available with delay
        setInterval(Ember.$.proxy(function() {
            // Attribute position computed by geolocation.geoposition
            console.log(this.get('position'));
        }, this), 1000);

        // You can use event handlers
        self.get('geolocation').on('change', function(geoposition){
            console.log(geoposition);
        });

        self.get('geolocation').on('error', function(){
            console.log("SOME ERR");
        });
    }
});
```

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/). Addon based on [geoPosition](https://github.com/estebanav/javascript-mobile-desktop-geolocation).
