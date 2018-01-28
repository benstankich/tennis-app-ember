import Ember from 'ember';

export default Ember.Route.extend({
	session: Ember.inject.service(),

	model() {
		// let currentUser = this.get('session.data.authenticated.id');
		// let isCoach = this.get('store').peekRecord('player', this.get('session.data.authenticated.id')).get('is_coach');
		
		// let player = this.get('store').createRecord('player', {
		// 	first_name: 'New',
		// 	last_name: 'Endpoint Player',
		// 	email: 'new3@example.com',
		// 	phone: '407-555-1234',
		// 	password: 'testtesttest',
		// 	password_confirmation: 'testtesttest',
		// 	gender: 1,
		// 	points: 1,
		// 	age: 16,
		// 	coach_id: 1,
		// 	age_range: 1
		// });
		// player.save();

		// let player = this.get('store').findRecord('player', 56, { backgroundReload: false }).then(function(player) {
		// 	player.deleteRecord();
		// 	player.get('isDeleted'); // => true
		// 	player.save(); // => DELETE to /posts/1
		// });

		// return this.store.findAll('player');
		// console.log(currentUser.player.first_name);

		// console.log("Current user: " + currentUser );
		// console.log("is_coach: "+ isCoach );

		// return [this.store.findRecord('player', this.get(currentUser.player.id))];
		// return [this.store.findRecord('player', currentUser)];
		// return [this.store.findRecord('player', this.get('current-user').player.id)];
		return this.store.findAll('player');
	}
});
