import Ember from 'ember';

export default Ember.Route.extend({
	session: Ember.inject.service(),

	model() {
		let currentUser = this.get('session.data.authenticated.id');
		let isCoach = this.get('store').peekRecord('player', this.get('session.data.authenticated.id')).get('is_coach');
		
		// return [this.store.findRecord('player', currentUser)];
		return Ember.RSVP.hash({
			// question: this.store.query('question', { gender: theGender, age_range: theAgeRange }),
			// question: this.store.query('question', { gender: theGender, age_range: theAgeRange }),
			question: this.store.query('question', { category: 7 }),
			answer: this.store.query('answer', { user_id: currentUser }),
			player: [this.store.findRecord('player', currentUser)]
		})
	}
});
