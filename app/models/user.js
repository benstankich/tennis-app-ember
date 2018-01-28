import Model from 'ember-data/model';
import DS from 'ember-data';

const {
	attr, belongsTo, hasMany
} = DS;
// so I can do attr() instead of DS.attr()

export default Model.extend({
	// relationships
	answer: hasMany('answer'),
	user_id: belongsTo('coach'),
	// , {inverse: 'books', async: true}

	// attributes
	// id: attr('string'),
	first_name: attr('string'),
	last_name: attr('string'),
	email: attr('string'),
	phone: attr('string'),
	password: attr('string'),
	password_confirmation: attr('string'),
	gender: attr('number'),
	points: attr('number'),
	age: attr('number'),
	isCoach: attr('string'),
	// coach_id: attr('number'),
	created_at: attr('date'),
	updated_at: attr('date'),
	age_range: attr('number')
});