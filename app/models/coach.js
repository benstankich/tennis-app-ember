import Model from 'ember-data/model';
import DS from 'ember-data';

const {
	attr, hasMany
	// , belongsTo
} = DS;
// so I can do attr() instead of DS.attr()

export default Model.extend({
	// relationships
	// userId: belongsTo('user'), // if have user model
	player: hasMany('player'),

	// attributes
	// id: attr(string),
	// first_name: attr('string'),
	// last_name: attr('string'),
	// email: attr('string'),
	// phone: attr('string'),
	// created_at: attr('date'),
	// updated_at: attr('date')
	first_name: attr(),
	last_name: attr(),
	email: attr(),
	phone: attr(),
	created_at: attr(),
	updated_at: attr(),
	password: attr(),
	is_coach: attr()
});