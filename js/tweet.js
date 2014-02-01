$.getJSON("resources/tweets-clean.json", function(data) {
	var myData = data;
	var tweets = [];
	var hashes = [];
	$.each(myData, function(i, item) {
		//console.log(item.text);
		
		if(item.entities.hashtags[0] != null) {
			for(var j = 0; j < item.entities.hashtags.length; j++) {
				//console.log("#" + item.entities.hashtags[j].text);
			}
		}
	})
});