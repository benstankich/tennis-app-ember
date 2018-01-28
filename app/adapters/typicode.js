// TODO - change adapter's name to offcourt or something

import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  // host: 'http://postgresql-env.8ts8eznn5d.us-east-1.elasticbeanstalk.com'
  host: 'http://postgresql-env-clone.us-east-1.elasticbeanstalk.com'
  // namespace: 'api/v1'
});