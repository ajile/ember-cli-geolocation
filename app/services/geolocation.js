import Ember from 'ember';

export default Ember.Object.extend(Ember.Evented, {

    /**
      @private

      Here lives result of setTimeout called timer.

      @property _timer
      @type Number
    */
    _timer: null,

    /**
      Number of milliseconds between iteration.

      @property interval
      @type Number
      @default 5000
    */
    interval: 5000,

    /**
      Preview result. Compired with current result to prevent
      occure `geoposition` event if coords not changed and if set
      option's flag `onlyUniqueValues`.

      @property interval
      @type Number
      @default null
    */
    prevHash: null,

    /**
      Last geoposition

      @property geoposition
      @type Object
    */
    geoposition: null,

    /**
      Default options for geoPosition#getCurrentPosition.

      @property geopositionOptions
      @type Object
    */
    geopositionOptions: {
        enableHighAccuracy: true
    },

    /**
      Options.

      @property options
      @type Object
    */
    options: {
        breakOnFallback: false,
        onlyUniqueValues: true
    },

    /**
      Constructor

      @method init
      @event ready
    */
    init: function() {

        // If geoPosition doen't exists throw an error in development mode
        Ember.assert('Must install `geoPosition` dependency', Ember.typeOf(geoPosition) === "object");

        // Is geoPosiion available
        if (geoPosition.init()) {
            this.trigger('ready', this);
            // Geo position library successfuly setted up - run interval
            // this.start();
        } else {
            this.trigger('unready', this);
        }
    },

    /**
      Begin periodically inquire `geoPosition` object to retrieve an
      information about current geolocation.
      
      @method start
    */
    start: function() {
        this._indent();
        return this;
    },

    /**
      Stop periodically inquire `geoPosition` object.
      
      @method start
    */
    stop: function() {
        this.set('_prevHash', null);
        // Prevent future call
        clearInterval(this.get('_timer'));
        return this;
    },

    /**
      Stop and start.
      
      @method restart
    */
    restart: function() {
        return this.stop().start();
    },

    /**
      Returns current geoposition.
      
      @method getGeoposition
      @return {Ember.RSVP.Promise}
    */
    getGeoposition: function() {
        var options = this.get('options');

        return new Ember.RSVP.Promise(function(resolve, reject) {
            geoPosition.getCurrentPosition(resolve, reject, options);
        });
    },

    /**
      Method envoke every `this.interval` time.
      
      @method start
    */
    tick: function() {

        var options = this.get('options');

        var success = Ember.run.bind(this, function() {
            // Invoke success method
            this.success.apply(this, arguments);

            // Continue ticking
            this._indent();
        });

        var fallback = Ember.run.bind(this, function() {
            // Invoke fallback method
            this.fallback.apply(this, arguments);

            // Continue ticking if breakOnFallback doesn't setted
            this.get('options.breakOnFallback') || this._indent();
        });

        // Ordering geoposition information into `success` method
        geoPosition.getCurrentPosition(success, fallback, options);
    },

    /**
      @event success
    */
    success: function(geoposition) {
        if (this.get('options.onlyUniqueValues')) {
            var currentHash = this._hash(geoposition);
            // Trigger only if coords changed.
            if (this.get('prevHash') === currentHash) {
                return;
            }
            this.set('prevHash', currentHash);
        }

        try {
            this.set('geoposition', geoposition);
        } catch (e) {}

        // Trigger opposite coords unchanged.
        this.trigger('change', geoposition, this);
    },

    /**
      @event error
    */
    fallback: function() {
        this.trigger('error', this);
    },

    /**
      @private

      Get hash of geoposition object.

      @method _indent
      @param {Object} geoposition
    */
    _hash: function(geoposition) {
        return [geoposition.coords.latitude, geoposition.coords.longitude].join('x');
    },

    /**
      @private

      Run setTimeout again.

      @method _indent
    */
    _indent: function() {
        var fn = Ember.run.bind(this, this.tick);
        var ms = this.get('interval');
        var timer = setTimeout(fn, ms);
        this.set('_timer', timer);
    }

});
