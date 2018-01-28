import Ember from 'ember';

export function parseDate(params) {

	let [arg1] = params;

	return arg1.substr(0,10);
}

export default Ember.Helper.helper(parseDate);
