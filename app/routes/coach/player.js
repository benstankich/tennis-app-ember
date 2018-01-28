import Ember from 'ember';

export default Ember.Route.extend({
	session: Ember.inject.service(),

	model(params) {
		let currentUser = this.get('session.data.authenticated.id');
		let isCoach = this.get('store').peekRecord('player', this.get('session.data.authenticated.id')).get('is_coach');

		let today = moment().format('YYYY-MM-DD');
		
		// how to limit this to only the coach's players?
		// return [this.store.findRecord('player', params.player_id)];
		return Ember.RSVP.hash({
			answer: this.store.query('answer', { user_id: params.player_id, day: today }),
			question: this.store.findAll('question'),
			player: [this.store.findRecord('player', params.player_id)]
		})
	},
  actions: {
    refreshModel: function() {
      this.refresh();
    }
  }
});
