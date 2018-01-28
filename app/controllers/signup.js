import Ember from 'ember';
import Controller from '@ember/controller';

export default Controller.extend({
	session: Ember.inject.service(),

	actions: {
	    authenticate: function() {
			let player = this.get('store').createRecord('player', {
				first_name: $('#first_name').val(),
				last_name: $('#last_name').val(),
				email: $('#email').val(),
				phone: $('#phone').val(),
				password: $('#password').val(),
				password_confirmation: $('#password_confirmation').val(),
				points: 0,
				age: $('#age').val(),
				gender: $('input[name="gender"]:checked').val(),
		    	coach_id: this.get('store').peekRecord('coach', $('#coach_id option:selected').val()),
		    	is_coach: 0
			});

			if ( $('#age').val() == 10 || $('#age').val() == 11 || $('#age').val() == 12 ) {
	    		player.age_range = 1;
	    	} else if ( $('#age').val() == 13 || $('#age').val() == 14 || $('#age').val() == 15 ) {
	    		player.age_range = 2;
	    	} else {
	    		player.age_range = 3;
	    	}

	    	var self = this;

			console.log(player);
			player.save().then(function() {

			}).catch(function(reason) {

			});

			// authenticate
			setTimeout(function() {
				var credentials = self.getProperties('identification', 'password'),
			        authenticator = 'authenticator:token';

			      self.get('session').authenticate(authenticator, credentials).then(function() {
				      self.transitionToRoute('signup-questions');
			      }).catch((reason) => {
				      self.transitionToRoute('signup-questions');
			      });
	        }, 500);
	    }
    }
});