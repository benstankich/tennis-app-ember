import Ember from 'ember';

export default Ember.Route.extend({
	session: Ember.inject.service(),

	model() {
		let currentUser = this.get('session.data.authenticated.id');
		let isCoach = this.get('store').peekRecord('player', this.get('session.data.authenticated.id')).get('is_coach');
		
		return this.store.findAll('question');

		// let sortedQuestions = Ember.computed('model.question', function() {
		// 	return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
		// 		sortProperties: ['id'],
		// 		sortAscending: true,
		// 		content: this.get('model.question')
		// 	});
		// })
		// return sortedQuestions;
	}
});
