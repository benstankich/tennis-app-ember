import Ember from 'ember';

export default Ember.Component.extend({
	// model() {
	// 	// console.log("hello");
	// 	// return this.store.findAll('question').then(function(list) {
	// 	// 	return list.filterBy("category",1);
	// 	// });
	// 	return this.store.findAll('question');
	// }
	model() {
		return this.store.findAll('question').then(function(list) {
			return list.filterBy("category",1);
		});
	}
});