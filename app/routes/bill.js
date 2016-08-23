import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey;
    var billId = params.bill_id;
    var url = 'http://congress.api.sunlightfoundation.com/bills?bill_id=' +billId+ '&apikey=' +key;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON.results[0]);
      return responseJSON.results[0];
    });
  }
});
