module.exports = {
  normalizeEntityName: function() {},
  afterInstall: function() {
    return this.addBowerPackageToProject('geoPosition');
  }
};