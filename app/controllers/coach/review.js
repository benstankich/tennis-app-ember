import Controller from '@ember/controller';

export default Controller.extend({

	actions: {

		today(params) {
			// this.transitionToRoute('/day/'+ $('.flatpickr-input').val() );
			// let currentUser = this.get('session.data.authenticated.id');

			return Ember.RSVP.hash({
				answer: this.store.query('answer', { day: $('.flatpickr-input').val() }).filterBy('day', $('.flatpickr-input').val()),
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
    }
});