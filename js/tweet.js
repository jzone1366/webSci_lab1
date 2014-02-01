$.getJSON("resources/tweets-clean.json", function(data) {
	var myData = data;
	var tweets = [];
	var hashes = [];
	$.each(myData, function(i, item) {
		tweets.push("<li>" + item.text + "</li>");
		if(item.entities.hashtags[0] != null) {
			for(var j = 0; j < item.entities.hashtags.length; j++) {
				hashes.push("<li>#" + item.entities.hashtags[j].text + "</li>");
			}
		}
		$('ul').html(tweets.join(''));
		//$('ul').html(hashes.join(''));
	});
});
function tweet_slide() {
	$('#tweet-ticker li:first').slideUp(function() {
		$(this).appendTo($('#tweet-ticker')).slideDown();
	});
};
setInterval(function() { tweet_slide() }, 3000);

/*function hash_slide() {
	$('#hash-ticker li:first').slideUp(function() {
		$(this).appendTo($('#hash-ticker')).slideDown();
	});
};
setInterval(function() {hash-slide() }, 3000);*/