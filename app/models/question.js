import Model from 'ember-data/model';
import DS from 'ember-data';

const {
	attr, hasMany, belongsTo
} = DS;
// so I can do attr() instead of DS.attr()

export default Model.extend({
	// relationships
	user_id: belongsTo('coach'),
	answer: hasMany('answer'),

	// attributes
	// id: attr(string),
	category: attr(),
	age_range: attr(),
	gender: attr(),
	question_type: attr(),
	options: attr(),
	question_text: attr(), //string
	// coach_id: attr(),
	// player_id: attr(),
	question_order: attr(),
	created_at: attr(),
	updated_at: attr() //date
});