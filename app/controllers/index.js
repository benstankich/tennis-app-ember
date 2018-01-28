import Ember from 'ember';

export default Ember.Controller.extend({
  // session: Ember.inject.service(),

  // actions: {
  //   authenticate: function() {
  //     var credentials = this.getProperties('identification', 'password'),
  //       authenticator = 'authenticator:token';

  //     var self = this;

  //     this.get('session').authenticate(authenticator, credentials).then(function() {
  //       self.transitionToRoute('/');
  //     }).catch((reason) => {
  //       this.set('errorMessage', reason.error || reason);
  //       self.transitionToRoute('/');
  //     });
  //   }
  // }
});