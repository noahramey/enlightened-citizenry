import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/bills?history.active=true&order=last_action_at&apikey=' +key+ '&per_page=50';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
