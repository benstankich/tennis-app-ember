import Ember from 'ember';

export default Ember.Route.extend({
	session: Ember.inject.service(),

	model() {
		let currentUser = this.get('session.data.authenticated.id');
		let isCoach = this.get('store').peekRecord('player', this.get('session.data.authenticated.id')).get('is_coach');
		

		return this.store.findAll('answer');
		// return this.store.query('answer', { id: 5 });

		// return this.store.findAll('answer', {include: 'player'});
		// return this.store.findRecord('answer', 1);
	}
	// model() {
	// 	return Ember.RSVP.hash({
	// 		answer: this.store.findAll('answer'),
	// 		player: this.store.findAll('player')
	// 	})
	// }
});
