import Controller from '@ember/controller';

export default Controller.extend({
	session: Ember.inject.service(),

	actions: {

		today(params) {
			let paramUser = $('#data-player-id').attr('data-player-id');
			// this.transitionToRoute('/coach/player/'+paramUser+'/'+ $('.flatpickr-input').val() );

			let currentUser = this.get('session.data.authenticated.id');

			// let cntrl = this;
			// cntrl.send('refreshModel');

			return Ember.RSVP.hash({
				answer: this.store.query('answer', { user_id: currentUser, day: $('.flatpickr-input').val() }),
			}).then(function() {

				setTimeout(function() {
					//do something special
					$('#answer-date-header').html("Answers on "+ moment($('.flatpickr-input').val()).format('LL') );
					$('.answer-day').css('display','none');
					$('.day-'+$('.flatpickr-input').val()).css('display','block');
				}, 500);
					
			})
		}
    }
});