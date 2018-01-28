import Ember from 'ember';

export default Ember.Route.extend({
	session: Ember.inject.service(),

	model() {

		// let names = this.get('store').findAll('player').mapBy('first_name');
		// console.log(names);

		// let names = this.get('store').findAll('player');
		// console.log(names);
		// let result = Ember.$.map(names, function(instance, index) {
		// return instance.first_name
		// })
		// console.log(result);
		// let currentUser = this.get('session.data.authenticated.id');
		// let isCoach = this.get('store').peekRecord('player', this.get('session.data.authenticated.id')).get('is_coach');
		// // let theGender = this.get('store').peekRecord('player', this.get('session.data.authenticated.id')).get('gender');
		// // let theAgeRange = this.get('store').peekRecord('player', this.get('session.data.authenticated.id')).get('age_range');
		
		// return Ember.RSVP.hash({
			return this.store.query('player', { first_name: "" });
		// })
	}
});