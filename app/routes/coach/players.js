import Ember from 'ember';

export default Ember.Route.extend({
	session: Ember.inject.service(),

	model() {
		let currentUser = this.get('session.data.authenticated.id');
		let isCoach = this.get('store').peekRecord('player', this.get('session.data.authenticated.id')).get('is_coach');
		
		// return this.store.findAll('player');

		// return all players with coach_id 1
		// return this.store.query('player', { coach_id: currentUser });
		return this.store.findAll('player');
	}
});
