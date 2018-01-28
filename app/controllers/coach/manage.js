import Controller from '@ember/controller';

export default Controller.extend({

	// sortProperties: ['id:asc'],
	// sortedModel: Ember.computed.sort('question', 'sortProperties'),

	actions: {

		toggleEditQuestion(name) {
			name = "question-"+name;
			console.log("." + name + " > .edit-question");
			$("." + name + " > .edit-question").css("display", "block");
			$("." + name + " > .unedited-question").css("display", "none");
		},

		deleteQuestion(id) {
			let player = this.get('store').findRecord('question', id, { backgroundReload: false }).then(function(player) {
				player.deleteRecord();
				player.get('isDeleted'); // => true
				player.save(); // => DELETE to /question/id
			});
		},

		editQuestion(id) {

			this.store.findRecord('question', id).then(function(question) {
				// ...after the record has loaded
				question.set('question_text', $(".question-" + id + "> .edit-question > input").val() );
				question.save();
			});

			$(".question-" + id + " > .edit-question").css("display", "none");
			$(".question-" + id + " > .unedited-question").css("display", "block");
		},

		reorderQuestions(id) {
			this.store.findRecord('question', id).then(function(question) {
				// ...after the record has loaded
				question.set('question_order', $(".question-" + id).attr('data-order') );
				question.save();
			});
		},

		saveQuestion(cat) {
			// console.log(cat);
			let length = this.get('question.length');
			// let currentUser = this.get('session.data.authenticated.id');

			let question = this.store.createRecord('question', {
				category: cat,
				age_range: $('input[name="age-range"]:checked').val(),
				gender: $('input[name="gender"]:checked').val(),
				question_type: $('input[name="answer-type"]:checked').val(),
				question_text: $('#question-text').val(),
				coach_id: this.get('session.data.authenticated.id'),
				question_order: (this.get('question.length')+1)
			});

			if ( $('input[name="answer-type"]:checked').val() === '2' ) {
				question.options = $('#answer-option-1').val() + ',' + $('#answer-option-2').val() + ',' + $('#answer-option-3').val();
			}

			question.save();

			$('.modal-blackout').css('display','none');
			$('.new-question').css('display','none');
		}
    }
});