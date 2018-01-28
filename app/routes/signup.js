import Ember from 'ember';

export default Ember.Route.extend({
	session: Ember.inject.service(),

	model() {
		// let currentUser = this.get('session.data.authenticated.id');
		// let isCoach = this.get('store').peekRecord('player', this.get('session.data.authenticated.id')).get('is_coach');
		
		return this.store.findAll('coach');
		// return this.store.createRecord('player');
	}
});
