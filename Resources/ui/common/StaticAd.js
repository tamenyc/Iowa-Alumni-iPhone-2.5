var GetFeed = require('ui/common/GetFeed');
var FormatDate = require('ui/common/FormatDate');
var WebView = require('ui/common/WebView');
var Feed = require('ui/common/Feed');
/*
 * Add an Ad at the bottom of a window.
 * Parameter "index" determine what ad is selected 
 * from the database.
 */
function StaticAd(index, topPosition, tracker, title){
	var Feeds = new Feed();
	var currentAd = new GetFeed(Feeds.staticaAdFeed());
	var ad = Ti.UI.createImageView({
	  image:    currentAd[index].ad,
	  width: setting.platformWidth(),
	  height: setting.staticAdHeight(),
	  bottom:0,
	  left: 0
	  
	});
	ad.addEventListener('click', function(e) {
		new WebView (currentAd[index].adUrl);
		tracker.trackEvent({
				category: "Ad",
				action: "click",
				label: "An Ad in the " + title + "'s Window - " + currentAd[index].ad,
				value: 1
		});
	}); 	
	
	return ad;
}

module.exports = StaticAd;
