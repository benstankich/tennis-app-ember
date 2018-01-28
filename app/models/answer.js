import Model from 'ember-data/model';
import DS from 'ember-data';

const {
	attr, belongsTo, hasMany
} = DS;
// so I can do attr() instead of DS.attr()

export default Model.extend({
	// relationships
	user_id: belongsTo('player'),
	question_id: belongsTo('question'),

	// attributes
	// id: attr(string),
	answer: attr(),
	// user_id: attr(),
	// question_id: attr(),
	points: attr(),
	day: attr(),
	created_at: attr(),
	updated_at: attr()
});