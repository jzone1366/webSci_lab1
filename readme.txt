Lab 1 - zonej - 660892754
Tweets to the Max

The JSON file is parsed via the jQuery getJSON function. As the file is parsed the fields for the tweet text and the hashtags are accessed and saved into respective arrays. (tweets[] and hashes[]). These arrays are populated by stepping through each item in the JSON file and pushing the desired text to the array. These arrays are then written to the DOM element <ul> with the respective #id in two separate instances with the .html function. Once they are written a javascript function uses jQurey animations to animate the tickers. The tweets are set at 3 secs while the hash tags are set at 5 secs. 

Parsing a json file with jquery proves to be relatively simple. This also allows me to not have to make any changes to any json file and be able to parse the information from any twitter api extract file that is in that format. However, since the information is a little dated many of the links for the profile pictures are returning 404 errors. They are currently included and the broken images are displayed. The animations were relatively simple to implement with very minimal lines of code. Overall the lab was relatively straight-forward. 



REFERENCES:
json.org 
	Information on accessing the proper fields in the JSON file. 
https://dev.twitter.com/docs/entities 
	Information on parsing the JSON outputt from the Twitter API.
http://groundworkcss.github.io/ 
	Framework used for the responsive grid 
http://api.jquery.com/
	Effects for the ticker. slideUp and slideDown are used on the lists. 
http://www.stackoverflow.com
	Used for help with using jquery to parse the JSON file and various other bug help. 
http://www.colorpicker.com/
	Used for the background colors