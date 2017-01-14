window.onload = prepareOnclick;
window.onload = abc;

function prepareOnclick() {
	var list = document.getElementById('list');
	var links = list.getElementsByTagName('a');

	for ( var i=0; i < links.length; i++) {
	  links[i].onclick = function() {
	  	console.log(list);
	  	return newContent(this) ? false : true;
		}
	}
}

function abc() {
	var request = getHTTPObject();
	request.open( "GET", "members/picklecai.html" , true);
	request.send();
	request.onreadystatechange = function() {
		if (request.readyState == 4) {
			console.log(request);
			console.log(request.responseText);
			document.getElementsByTagName("body").innerHTML = request.responseText;
		}
	}
}



function showInfo(who) {
	var source = who.getAttribute("href");
	var place = document.getElementById('place');

}
