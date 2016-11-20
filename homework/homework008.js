function getInfo1() {
	var bookNum = 1;
	var arrayNum = 0;
	var readed = Array();
	var book = Object();
	var ratingSum = 0;

	do {
		book.name = prompt("输入第"+bookNum+"本书的名字", "请填写");
		book.writer = prompt("输入第"+bookNum+"本书的作者", "请填写");
		book.rating = prompt("输入第"+bookNum+"本书的评分，请填写 1-10 数字", "请填写")*1;
		ratingSum += book.rating;
		readed[arrayNum] = book;
		bookNum++;
		arrayNum++;

	} while (prompt("继续输入？请输入Y/N","Y") == "Y");

	var ratingAverage = ratingSum/arrayNum;
	alert("您今年共读了"+bookNum+"本书，评分均值为"+ratingAverage)

}


/*

function getInfo() {
	var Num = 1;
	var bookNames = Array(), bookWriters = Array(), bookRatings = Array();

	do {
		bookNames[Num] = prompt("输入第"+Num+"本书的名字", "请填写");
		bookWriters[Num] = prompt("输入第"+Num+"本书的作者", "请填写");
		bookRatings[Num] = prompt("输入第"+Num+"本书的评分，请填写 1-10 数字", "请填写");
		Num++;
	} while (prompt("继续输入？请输入Y/N","") == "Y");
}

*/

function getInfo2() {

	var name = document.createTextNode("书名");
	var writer = document.createTextNode("作者");
	var rating = document.createTextNode("评分");
	var th1 = document.createElement("th");
	var th2 = document.createElement("th");
	var th3 = document.createElement("th");
	th1.appendChild(name);
	th2.appendChild(writer);
	th3.appendChild(rating);
	var tr = document.createElement("tr");
	tr.appendChild(th1);
	tr.appendChild(th2);
	tr.appendChild(th3);
	var table = document.createElement("table");
	table.appendChild(tr);

	var bookNum = 1;
	var arrayNum = 0;
	var readed = Array();
	var ratingSum = 0;

	do {
		var book = Object();
		// 局部变量与全局变量经常出错，要提高警惕

		book.name = prompt("输入第"+bookNum+"本书的名字", "请填写");
		book.writer = prompt("输入第"+bookNum+"本书的作者", "请填写");
		book.rating = prompt("输入第"+bookNum+"本书的评分，请填写 1-10 数字", "请填写")*1;

		readed[arrayNum] = book;

		var name = document.createTextNode(book.name);
		var writer = document.createTextNode(book.writer);
		var rating = document.createTextNode(book.rating);
		var td1 = document.createElement("td");
		var td2 = document.createElement("td");
		var td3 = document.createElement("td");
		td1.appendChild(name);
		td2.appendChild(writer);
		td3.appendChild(rating);
		var tr = document.createElement("tr");
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		table.appendChild(tr);

		ratingSum += book.rating;
		bookNum++;
		arrayNum++;

		console.log(book);

	} while (prompt("继续输入？请输入Y/N","Y") == "Y");

	var returnDiv = document.getElementById("returnDiv1");
	returnDiv.appendChild(table);

	var ratingAverage = ratingSum/arrayNum;
	var variance = 0;
	for (var i = 0; i < readed.length; i++) {
		variance += (readed[i].rating - ratingAverage)*(readed[i].rating - ratingAverage);
		// ^2 是计算不出平方的！醉点……
		console.log(i);
	}
	variance = variance / (ratingAverage - 1);

	alert("您今年共读了"+arrayNum+"本书，评分均值为"+ratingAverage+"分，方差为"+variance);

}


var clickCount = 0;
var table = document.createElement("table");

function append(arr1, arr2, arr3, thtd) {

	var txt1 = document.createTextNode(arr1);
	var txt2 = document.createTextNode(arr2);
	var txt3 = document.createTextNode(arr3);

	var thtd1 = document.createElement(thtd);
	var thtd2 = document.createElement(thtd);
	var thtd3 = document.createElement(thtd);

	thtd1.appendChild(txt1);
	thtd2.appendChild(txt2);
	thtd3.appendChild(txt3);

	var tr = document.createElement("tr");
	tr.appendChild(thtd1);
	tr.appendChild(thtd2);
	tr.appendChild(thtd3);

	table.appendChild(tr);

	console.log(table);

}


function getInfo3() {

	if (clickCount == 0) {
		append("书名", "作者", "评分", "th");
	}

	var book = Object();
	book.name = document.getElementById("name").value;
	book.writer = document.getElementById("writer").value;
	book.rating = document.getElementById("rating").value;

	// 好像只能用 getElmentById().value 来获取 input 的值？

	console.log(book);

	append(book.name, book.writer, book.rating, "td");

	// button 会使页面在点击后刷新，不想刷新，应使用 input

	clickCount++;
	document.getElementById("clickCount").innerHTML=clickCount;

	console.log(clickCount);

	// more task : 如何随意定义列数，动态生成函数？目标：列数可定义，行数无限
}

var returnDiv = document.getElementById("returnDiv2");
returnDiv.appendChild(table);











