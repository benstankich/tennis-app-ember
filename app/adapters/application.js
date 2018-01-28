import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
	authorizer: 'authorizer:token'
});

// import DS from 'ember-data';
// // import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

// export default DS.RESTAdapter.extend({
// // export default DS.RESTAdapter.extend(DataAdapterMixin, {
//   // authorizer: 'authorizer:token',
//   // host: config.api_host
//   host: 'http://project-env-4.us-east-1.elasticbeanstalk.com'
// });

// // import DS from 'ember-data';
// // import config from  '../config/environment'; 

// // export default DS.RESTAdapter.extend({
// //     host: config.api_host,
// // });