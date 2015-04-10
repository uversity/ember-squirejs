module.exports = {
  description: 'Performs post-installation tasks for ember-squirejs',

  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addBowerPackageToProject('squirejs=https://raw.githubusercontent.com/iammerrick/Squire.js/master/src/Squire.js');
  }
};
