import Controller from '@ember/controller';

export default Controller.extend({
	session: Ember.inject.service(),
	
	actions: {
		saveAnswer(param) {
			let currentUser = this.get('session.data.authenticated.id');
			// let isCoach = this.get('store').peekRecord('player', this.get('session.data.authenticated.id')).get('is_coach');

			let answer = this.get('store').createRecord('answer', {
				user_id: this.get('store').peekRecord('player', currentUser),
				question_id: this.get('store').peekRecord('question', param)
			});

			console.log("Question ID: "+param);

			// text answers
			if ( $("#answer-container-"+param).attr("data-input-type") == "text") {
				answer.answer = $("#answer-"+param).val();
			} else {
				// multiple choice answers
				answer.answer = $('input[name="radio-'+param+'"'+']:checked').val();
			}

			var self = this;

			// console.log(answer);
			console.log(answer);
			answer.save().then(function() {
				self.transitionToRoute('player');
			}).catch(function(reason) {
			});
		}
		// filterByCategory(param) {
		// 	if (param !== '') {
		// 		console.log(param);
		// 		return this.store.query('question', { gender: 3, age_range: 4, category: param});
		// 	} else {
		// 		console.log("Default: "+param);
		// 		return this.store.query('question', { gender: 3, age_range: 4, category: 1});
		// 	}
		// }
	}
});