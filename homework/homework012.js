function showInfo(whoseinfo) {
	var source = whoseinfo.getAttribute("alt");
	var changinfo = document.getElementsByClassName("who_description");
	changinfo.appendChild(source);
}