alert("你好，世界！");

function alertTest() {
	alert("你好，世界！");
}

var name;

function sayHi() {
	name = prompt("请输入你的名字", "赵四");
	var output = "你好哇！";
	if (name != null) {
		output += name;
		document.write(output+"！");
	}
}

function closeTab() {
	var choice = confirm("真的要离开吗？");
	if (choice == true) {
		window.close();
	}
	else {
		alert("那就再看看吧！");
	}
}

function guessMyAge() {
	var $userDate = prompt("请输入8位出生年月日","19680509");
	if ($userDate.length == 8 && $userDate != null && $userDate.substr(4,2) <= 12 && $userDate.substr(6) <= 31) {

		var today = new Date();
		var year = today.getFullYear();
		var month = today.getMonth();
		var day = today.getDate();

		var $userAge = year - $userDate.substr(0,4);

		if ($userDate.substr(4,2) > (++month) && $userDate.substr(6) > day) {
			document.write("您周岁 "+($userAge-1)+"。");
		}
		else {
			document.write("您周岁 "+$userAge+"。")
		}
	}
	else {
		alert("输入有误，请重新输入！");
	}
}