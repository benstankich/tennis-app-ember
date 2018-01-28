import DS from 'ember-data';

export default DS.JSONSerializer.extend({
	normalizeResponse(store, primaryModelClass, payload, id, requestType) {
		console.log(payload);
		// console.log(payload[0]);
		return this._super(store, primaryModelClass, payload, id, requestType);
	}
});