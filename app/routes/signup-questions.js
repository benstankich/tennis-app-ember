import Ember from 'ember';

export default Ember.Route.extend({
	session: Ember.inject.service(),

	model() {
		let currentUser = this.get('session.data.authenticated.id');
		// let isCoach = this.get('store').peekRecord('player', this.get('session.data.authenticated.id')).get('is_coach');

		return Ember.RSVP.hash({
			question: this.store.query('question', { category: 7 }),
			// question: this.store.query('question', { gender: 3, age_range: 4, category: 7 }),
			// answer: this.store.findAll('answer'),
			player: [this.store.findRecord('player', currentUser)]
		})
	}
});