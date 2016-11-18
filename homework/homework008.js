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
	var book = Object();
	var ratingSum = 0;

	do {
		book.name = prompt("输入第"+bookNum+"本书的名字", "请填写");
		book.writer = prompt("输入第"+bookNum+"本书的作者", "请填写");
		book.rating = prompt("输入第"+bookNum+"本书的评分，请填写 1-10 数字", "请填写")*1;

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
		readed[arrayNum] = book;
		bookNum++;
		arrayNum++;

	} while (prompt("继续输入？请输入Y/N","Y") == "Y");


	var returnDiv = document.getElementById("returnDiv");
	returnDiv.appendChild(table);

	var ratingAverage = ratingSum/arrayNum;

	var variance = 0;
	for (var i = 0; i < readed.length; i++) {
		variance += (readed[i].rating - ratingAverage)^2;
	}
	variance = variance / (ratingAverage - 1)

	alert("您今年共读了"+arrayNum+"本书，评分均值为"+ratingAverage+"分，方差为"+variance);
		

}














