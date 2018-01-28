import Ember from 'ember';

export default Ember.Route.extend({
	session: Ember.inject.service(),

	model() {
		let currentUser = this.get('session.data.authenticated.id');
		let isCoach = this.get('store').peekRecord('player', this.get('session.data.authenticated.id')).get('is_coach');
		
		// let coach = this.store.createRecord('coach', {
		// 	// id: 2,
		// 	first_name: 'New',
		// 	last_name: 'Endpoint',
		// 	email: 'tester1@example.com',
		// 	phone: '407-555-1234',
		// 	password: "testtesttest"
		// 	// encrypted_password: "testtesttest"
		// });
		// coach.save();

		// this.store.findRecord('coach', 7).then(function(tyrion) {
		// 	// ...after the record has loaded
		// 	tyrion.set('first_name', 'Peyton');
		// 	tyrion.save();
		// });

		return this.store.findAll('coach');
		// return this.store.findRecord('coach', 1);
	}
});
