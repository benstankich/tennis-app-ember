import Ember from 'ember';

export default Ember.Route.extend({
	session: Ember.inject.service(),

	model(params) {
		let currentUser = this.get('session.data.authenticated.id');
		let isCoach = this.get('store').peekRecord('player', this.get('session.data.authenticated.id')).get('is_coach');
		
		// return this.store.findAll('player');

		// return all players with coach_id 1
		// return this.store.query('player', { coach_id: 1 });
		if (params == '') {
			return Ember.RSVP.hash({
				player: this.store.query('player', { coach_id: currentUser }),
				coach: [this.store.findRecord('coach', currentUser)]
			})
			// return this.store.query('player', { coach_id: currentUser });
		} else {
			return Ember.RSVP.hash({
				player: [this.store.findRecord('player', params.player_id)],
				coach: [this.store.findRecord('coach', currentUser)]
			})
			// return [this.store.findRecord('player', params.player_id)];
		}
		// return [this.store.findRecord('player', params.player_id)];
	}
});
