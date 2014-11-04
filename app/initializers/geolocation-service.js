export function initialize(container, application) {
  application.inject('route', 'geolocationService', 'service:geolocation');
  application.inject('controller', 'geolocation', 'service:geolocation');
  application.inject('view', 'geolocation', 'service:geolocation');
};

export default {
  name: 'geolocation-service',
  initialize: initialize
};
