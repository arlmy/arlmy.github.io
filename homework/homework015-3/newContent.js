window.onload = prepareOnclick;

function prepareOnclick() {
	var list = document.getElementById('list');
	var links = list.getElementsByTagName('a');

	for ( var i=0; i < links.length; i++) {
	  links[i].onclick = function() {
	  	console.log(list);
	  	newContent(this);
	  	return false;

	  	var toString = Object.prototype.toString;
		toString.call(new this);
		}
	}
}


function newContent(url) {
	var request = getHTTPObject();
	console.log(url); 
	// 返回的格式是：<a href="linkding.html">零丁</a> 为什么也可以直接解析？
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






