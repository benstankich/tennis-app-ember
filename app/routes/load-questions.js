import Ember from 'ember';

export default Ember.Route.extend({
	session: Ember.inject.service(),

	model() {
		let currentUser = this.get('session.data.authenticated.id');
		let isCoach = this.get('store').peekRecord('player', this.get('session.data.authenticated.id')).get('is_coach');
		
		// return this.store.findAll('question').then(function(list) {
		// 	return list.filterBy("category",1);
		// });

		// this.store.filter('question', function(record) {
		// 	return record.get('category') == 1;
		// });

		// let mental = this.get('store').query('question', {
		// 	filter: {
		// 		category: 1
		// 	}
		// }).then(function(mental) {
		// 	console.log("Mental:");
		// 	console.log(mental);
		// 	return mental;
		// });

		return this.store.findAll('question');
		// return this.store.findRecord('player', 1);
	}
});
