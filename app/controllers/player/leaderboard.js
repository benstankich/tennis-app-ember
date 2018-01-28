import Ember from 'ember';
import EmberObject, { computed } from '@ember/object';

export default Ember.Controller.extend({

	// sortedPlayers: Ember.computed('model.players', function() {
	//   return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
	//     sortProperties: ['points:asc'],
	//     // sortAscending: true,
	//     content: this.get('model.players')
	//   });
	// }),

	sortProperties: ['points:desc'],
	sortedPlayers: Ember.computed.sort('model', 'sortProperties'),

	// model() {
	// 	return this.store.findAll('player');
	// },

	// leaderboard: Ember.computed(function() {
	// 	return {
	// 		labels: this.get('model').mapBy('answer'),
	// 		datasets: [{
	// 			label: 'Player Leaderboard',
	// 			data: this.get('model').mapBy('id')
	// 		}]
	// 	}
	// }),
	// leaderboard: Ember.computed(function() {
	// 	return {
	// 		labels: ["yes","no","n/a"],
	// 		datasets: [{
	// 			label: 'Player Leaderboard',
	// 			data: [this.get('model').mapBy('answer')
	// 		}]
	// 	}
	// }),
	points: Ember.computed(function() {
		return {
			labels: this.get('model').mapBy('first_name'),
			datasets: [{
				label: 'Leaderboard',
				data: this.get('model').mapBy('points')
			}]
		}
	}),
	// gender: Ember.computed(function() {
	// 	return {
	// 		labels: ["Male", "Female"],
	// 		datasets: [{
	// 			label: 'Player Leaderboard',
	// 			data: this.get('model').mapBy('gender')
	// 		}]
	// 	}
	// }),
	barOptions: {
		responsive: true,
		barValueSpacing: 3
	}

});