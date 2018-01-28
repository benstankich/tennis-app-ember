import Ember from 'ember';

export function formatRadioAnswer(params) {
	let [segment, string] = params;

	// string = "yes,no,n/a";
	let first = string.indexOf(',');
	let last = string.lastIndexOf(',');

	if (segment === 1) {
		return string.substr( 0, first );
	} else if (segment === 2) {
		return string.substr( 0, last ).substr( first+1 );
	} else {
		return string.substr( last+1 );
	}
}

export default Ember.Helper.helper(formatRadioAnswer);
