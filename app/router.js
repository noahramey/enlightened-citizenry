import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('legislators', {path: '/legislators/:zip'});
  this.route('committees');
  this.route('bills');
  this.route('bill', {path: '/bill/:bill_id'});
  this.route('sponsor', {path: '/sponsor/:sponsor_id'});
});

export default Router;
