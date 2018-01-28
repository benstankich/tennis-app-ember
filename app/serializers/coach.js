import DS from 'ember-data';

export default DS.JSONSerializer.extend({
	// keyForAttribute(key) {
	// 	return Ember.String.decamelize(key);
	// },

	normalizeResponse(store, primaryModelClass, payload, id, requestType) {
		// payload = { coaches: payload }; // to get lots of records
		console.log(payload);
		console.log(payload[0]);
		// console.log(payload.errors);
		return this._super(store, primaryModelClass, payload, id, requestType);
	},

	normalizeFindRecordResponse(store, type, payload) {
		return this._super(store, type, payload);
	}

	// normalizeSaveResponse(store, primaryModelClass, payload, id, requestType) {
	// 	console.log(payload);
	// 	console.log({first_name: 'Doodle',
	// 		last_name: 'Jump',
	// 		email: 'jj@thejetplane.com',
	// 		phone: '407-555-1234'});
	// 	return this._super(store, primaryModelClass, payload[0], id, requestType);
	// },

	// normalizeCreateRecordResponse(store, primaryModelClass, payload, id, requestType) {
	// 	console.log("hi");
	// 	console.log(payload);
	// 	return this._super(store, primaryModelClass, payload, id, requestType);
	// },

	// normalizeSaveResponse(store, primaryModelClass, payload, id, requestType) {
	// 	// console.log("hi");
	// 	console.log(payload);
	// 	return this._super(store, primaryModelClass, payload, id, requestType);
	// }
});

// export default DS.RESTSerializer.extend({
// 	normalizeResponse(store, primaryModelClass, payload, id, requestType) {
// 		payload = { coaches: payload };

// 		// payload.posts.

// 		console.log(payload);
// 		// console.log(payload.errors);
// 		return this._super(store, primaryModelClass, payload, id, requestType);
// 	}

// 	// normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
// 	// 	payload = { coaches: payload };

// 	// 	console.log(payload);

// 	// 	return this._super(store, primaryModelClass, payload, id, requestType);
// 	// }

// 	// serialize(snapshot, options) {

// 	// 	console.log(snapshot);

// 	// 	// var json = {
// 	// 	// 	first_name: snapshot.attr('first_name'),
// 	// 	// 	last_name: snapshot.attr('last_name'),
// 	// 	// 	email: snapshot.attr('email'),
// 	// 	// 	phone: snapshot.attr('phone')
// 	// 	// };

// 	// 	// return json;
// 	// }

// 	// normalizeCreateRecordResponse(store, primaryModelClass, payload, id, requestType) {
// 	// 	// payload = { coaches: payload };

// 	// 	return this._super(store, primaryModelClass, payload, id, requestType);
// 	// }

// 	// handleResponse: function(status, headers, payload){
// 	// 	if(status === 422 && payload.errors){
// 	// 		return new DS.InvalidError(payload.errors);
// 	// 	}
// 	// 	return this._super(status, headers, payload);
// 	// }
// });