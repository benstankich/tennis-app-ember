import DS from 'ember-data';

export default DS.JSONSerializer.extend({

	normalizeResponse(store, primaryModelClass, payload, id, requestType) {
		// console.log(payload);
		// console.log(payload[0]);
		return this._super(store, primaryModelClass, payload, id, requestType);
	}

	// ,
	// normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
	// 	console.log(payload);
	// 	// payload = [payload]; // to get lots of records
	// 	// console.log(payload);
	// 	// console.log(payload[0]);
	// 	// console.log(payload.errors);
	// 	return this._super(store, primaryModelClass, payload, id, requestType);
	// }

	// ,
	// normalizeFindRecordResponse(store, type, payload) {
	// 	// console.log(payload);
	// 	payload = [payload]; // to get lots of records
	// 	console.log(payload);
	// 	return this._super(store, type, payload);
	// }
});

// export default DS.RESTSerializer.extend({
	// normalizeResponse(store, primaryModelClass, payload, id, requestType) {
	// 	payload = { players: payload }; // to get lots of records
	// 	// console.log(payload);
	// 	// console.log(payload.errors);
	// 	return this._super(store, primaryModelClass, payload, id, requestType);
	// },

	// normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
	// 	// payload = { players: payload }; // to get lots of records
	// 	// console.log(payload);
	// 	// console.log(payload.errors);
	// 	return this._super(store, primaryModelClass, payload, id, requestType);
	// }

	// normalizeQueryResponse(store, primaryModelClass, payload, id, requestType) {
	// 	console.log(payload);
	// 	return this._super(store, primaryModelClass, payload, id, requestType);
	// }

	// normalizeSaveResponse(store, primaryModelClass, payload, id, requestType) {
	// 	console.log(payload);
	// 	// payload = { players: payload };
	// 	// console.log(payload);
	// 	// console.log(payload.errors);
	// 	return this._super(store, primaryModelClass, payload, id, requestType);
	// }

	// handleResponse: function(status, headers, payload){
	// 	if(status === 422 && payload.errors){
	// 		return new DS.InvalidError(payload.errors);
	// 	}
	// 	return this._super(status, headers, payload);
	// }
// });