import Ember from 'ember';

export default Ember.Route.extend({
	// model() {
	// 	return this.store.findAll('player');
	// }

	session: Ember.inject.service(),

	actions: {
  sessionChanged: function() {
    this.refresh();
  }
},

	model() {
		let currentUser = this.get('session.data.authenticated.id');
		let isCoach = this.get('store').peekRecord('player', this.get('session.data.authenticated.id')).get('is_coach');

		// let userID = this.get('session.data.authenticated.id');
		// console.log ("Test: " + this.get('session.data.authenticated.id'));

		let today = moment().format('YYYY-MM-DD');

		return Ember.RSVP.hash({
			question: this.store.findAll('question'),
			answer: this.store.query('answer', { day: today }),
			player: this.store.findAll('player'),
			coach: [this.store.findRecord('coach', currentUser)]
			// player: this.store.query('player', {
			// 	filter: {
			// 		coach_id: 1
			// 	}
			// }).then(function(thisCoach) {
			// 	return [thisCoach]
			// }),
			// coach: [this.store.findRecord('coach', 1)]
		})
	}
});
