export function initialize(container, application) {
  application.inject('route', 'geolocationService', 'service:geolocation');
};

export default {
  name: 'geolocation-service',
  initialize: initialize
};
