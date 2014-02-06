$.getJSON("resources/tweets-clean.json", function(data) {
	var myData = data;
	var hashes = [];
	var tweets = [];
	$.each(myData, function(i, item) {
		tweets.push("<li><img src='"+ item.user.profile_image_url + "'/>" + item.text + "</li>");
		if(item.entities.hashtags[0] != null) {
			for(var j = 0; j < item.entities.hashtags.length; j++) {
				hashes.push("<li>#" + item.entities.hashtags[j].text + "</li>");
			}
		}		
	});
	$('#tweets').html(tweets.join(''));
	$('#hashes').html(hashes.join(''));
});
function tweet_slide() {
	$('#tweets li:first').slideUp(function() {
		$(this).appendTo($('#tweets')).slideDown();
	});
};
setInterval(function() { tweet_slide() }, 3000);

function hash_slide() {
	$('#hashes li:first').slideUp(function() {
		$(this).appendTo($('#hashes')).slideDown();
	});
};
setInterval(function() { hash_slide() }, 5000);