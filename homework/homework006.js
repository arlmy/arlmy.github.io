alert("你好，世界！");

function alertTest() {
	alert("你好，世界！");
}

function sayHi() {
	var name = prompt("请输入你的名字", "赵四");
	var output = "你好哇！";
	if (name != null) {
		output += name;
		document.write(output+"！");
		document.write("</br></br>" + "<a href='javascript: location.reload()'>点击返回</a>");
	}
}

function closeTab() {
	var choice = confirm("真的要离开吗？");
	if (choice == true) {
		window.close();
	}
	else {
		alert("再看看呗！");
	}
}

function guessMyAge() {
	var $userDate = prompt("请输入8位出生年月日","19680509");
	if ($userDate != null && $userDate.length == 8 && $userDate.substr(4,2) <= 12 && $userDate.substr(6) <= 31) {

		var today = new Date();
		var year = today.getFullYear();
		var month = today.getMonth();
		var day = today.getDate();

		var $userAge = year - $userDate.substr(0,4);

		if ($userDate.substr(4,2) > (++month) && $userDate.substr(6) > day) {
			document.write("您周岁 "+($userAge-1)+"。");
			document.write("</br></br>" + "<a href='javascript: location.reload()'>点击返回</a>");
		}
		else {
			document.write("您周岁 "+$userAge+"。");
			document.write("</br></br>" + "<a href='javascript: location.reload()'>点击返回</a>");
		}
	}
	else {
		alert("输入有误，请重新输入！");
	}
}

function saveUserInfo() {
	var info = {};
	var name = document.getElementById("input_name");
	var sex = document.getElementById("input_sex");
	var birth = document.getElementById("input_birth");
	var city = document.getElementById("input_city");

	info.name = name.value;
	info.sex = sex.value;
	info.birth = birth.value;
	info.city = city.value;

	var birthDetail = Array();
	birthDetail[0] = info.birth.substr(0,4);
	birthDetail[1] = info.birth.substr(4,2);
	birthDetail[2] = info.birth.substr(6);

	document.write("请核实您输入的信息：" + "</br></br>您的姓名：" + info.name + "</br>您的性别：" + info.sex + "</br>出生日期：" + birthDetail[0] + " 年 " + birthDetail[1] + " 月 " + birthDetail[2] + " 日" + "</br>所在城市：" + info.city + "</br>");
	document.write("</br></br>" + "<a href='javascript: location.reload()'>点击返回</a>");
}