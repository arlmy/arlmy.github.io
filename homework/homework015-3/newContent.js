window.onload = prepareOnclick;

function prepareOnclick() {
	var list = document.getElementById('list');
	var links = list.getElementsByTagName('a');
	var urls = a.getAttribute("href");

	for ( var i=0; i < links.length; i++) {
	  links[i].onclick = function() {
	  	console.log(list);
	  	newContent(this);
	  	return false;
		}
	}
}


function newContent(url) {
	var request = getHTTPObject();
	request.open( "GET", url , true);
	request.responseType = "document";
	request.send();
	request.onreadystatechange = function() {
		if (request.readyState == 4) {
			console.log(request);
			var Html = request.responseXML.body.innerHTML;
			console.log(Html);
			document.getElementById("place").innerHTML = Html;
		}
	}
}






