window.onload = prepareOnclick;

function prepareOnclick() {
	var list = document.getElementById('list');
	var links = list.getElementsByTagName('a');

	for ( var i=0; i < links.length; i++) {
	  links[i].onclick = function() {
	  	console.log(list);
	  	newContent(this);
	  	alert(this);
	  	return false;
		}
	}
}


function newContent(url) {
	var request = getHTTPObject();
	console.log(url);
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






