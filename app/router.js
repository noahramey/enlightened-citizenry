import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('legislators', {path: '/legislators/:zip'});
  this.route('committees');
});

export default Router;
