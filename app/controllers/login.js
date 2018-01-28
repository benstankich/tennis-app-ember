import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    authenticate: function() {
      var credentials = this.getProperties('identification', 'password'),
        authenticator = 'authenticator:token';

      var self = this;

      this.get('session').authenticate(authenticator, credentials).then(function() {
        setTimeout(function() {
          // let currentUser = this.get('session.data.authenticated.id');
          // console.log(currentUser);
          let isCoach = self.get('store').peekRecord('player', self.get('session.data.authenticated.id')).get('is_coach');

          if (isCoach === 1) {
            self.transitionToRoute('coach');
          } else {
              self.transitionToRoute('player');
          }
        }, 500);
      }).catch((reason) => {
        setTimeout(function() {
        // let currentUser = this.get('session.data.authenticated.id');
          // console.log(currentUser);

          alert(reason.message);

          let isCoach = self.get('store').peekRecord('player', self.get('session.data.authenticated.id')).get('is_coach');

          if (isCoach === 1) {
            self.transitionToRoute('coach');
          } else {
              self.transitionToRoute('player');
          }
        }, 500);
      });
    }
  }
});