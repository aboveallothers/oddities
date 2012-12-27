// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree
//= require modernizr

$(function() {
	var twitter_api_url = 'http://search.twitter.com/search.json',
		twitter_user = 'oddities_';
 	
 	$.ajaxSetup({cache: true});

	$.getJSON(twitter_api_url + '?callback=?&rpp=1&q=from:' + twitter_user, function(data) {
    	$.each(data.results, function(i, tweet) {
	        if(tweet.text !== undefined) {
	        	var date_tweet = new Date(tweet.created_at),
	          		date_now = new Date(),
	        		date_diff = date_now - date_tweet,
	          		hours = Math.round(date_diff/(1000*60*60)),
	          		tweet_html = '<article><p>' + tweet.text + '<\/p><time>' + hours + ' hours ago<\/time><\/article>';
	 			
	 			$('#twitter').append(tweet_html);
	        }
    	});
  	});
});
