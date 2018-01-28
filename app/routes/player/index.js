import Ember from 'ember';

export default Ember.Route.extend({
	session: Ember.inject.service(),

	model() {
		let currentUser = this.get('session.data.authenticated.id');
		// let isCoach = this.get('store').peekRecord('player', this.get('session.data.authenticated.id')).get('is_coach');
		// let theGender = this.get('store').peekRecord('player', this.get('session.data.authenticated.id')).get('gender');
		// let theAgeRange = this.get('store').peekRecord('player', this.get('session.data.authenticated.id')).get('age_range');
		
		return Ember.RSVP.hash({
			// question: this.store.query('question', { gender: theGender, age_range: theAgeRange }),
			// question: this.store.query('question', { gender: theGender, age_range: theAgeRange }),
			question: this.store.findAll('question'),
			// answer: this.store.findAll('answer'),
			player: [this.store.findRecord('player', currentUser)]
		})
	}
});