import Ember from 'ember';
import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
	// beforeModel() {
	// 	if (this.get('session.isAuthenticated')) {
	// 		// let currentUser = this.get('session.data.authenticated.id');
	// 		// let isCoach = this.get('store').peekRecord('player', this.get('session.data.authenticated.id')).get('is_coach');

	// 		// if (currentUser != null) {
	// 		// 	if (isCoach) {
	// 		// 		this.transitionTo('coach');
	// 		// 	} else {
	// 		// 		this.transitionTo('player');
	// 		// 	}
	// 		// } else {
	// 		// 	this.transitionTo('login');
	// 		// }
	// 		this.transitionTo('player');
	// 	}
	// }
	model() {
		
	}
});
