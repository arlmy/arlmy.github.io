function getHTTPObject() {
	var xhr = new XMLHttpRequest();
	if (typeof XMLHttpRequest == "undefined") {
		xhr = function() {
			try {return new ActiveXObject("Msxml2.XMLHTTP.6.0");} catch(e) {}
			try {return new ActiveXObject("Msxml2.XMLHTTP.3.0");}catch(e) {}
			try {return new ActiveXObject("Msxml2.XMLHTTP");}catch(e) {}
			return false;
		}
	}
	return xhr;
}