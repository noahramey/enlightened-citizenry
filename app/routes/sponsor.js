import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey;
    var youTubeKey = config.myYouTubeApiKey;
    var sponsorId = params.sponsor_id;
    var youtubeUser = 'senatorwicker';
    var url = 'http://congress.api.sunlightfoundation.com/legislators?bioguide_id=' +sponsorId+ '&apikey=' +key;
    var youtubeUrl = 'https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forUsername=' +youtubeUser+ '&key=' +youTubeKey;

    return Ember.RSVP.hash({
      sponsor: Ember.$.getJSON(url).then(function(responseJSON) {
        console.log(responseJSON.results[0]);
        return responseJSON.results[0];
      }),
      youtube: Ember.$.getJSON(url).then(function(responseJSON) {
        return responseJSON.results[0].youtube_id;
      }).then(function(youtubeId) {
        return Ember.$.getJSON('https://www.googleapis.com/youtube/v3/search?part=snippet&q=' +youtubeId+ '&key=' +youTubeKey).then(function(responseJSON) {
          console.log(responseJSON.items[1]);
          return responseJSON.items[1];
        })
      })
    });

    // return Ember.$.getJSON(url).then(function(responseJSON) {
    //   console.log(responseJSON.results[0]);
    //   return responseJSON.results[0];
    // });
  }
});
