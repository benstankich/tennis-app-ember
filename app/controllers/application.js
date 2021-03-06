// app/controllers/application.js
import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  currentUser: Ember.inject.service('current-user'),

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});