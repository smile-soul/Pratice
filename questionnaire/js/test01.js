function submitt() {
	var question2 = document.getElementsByName("1");
	for (var i = 0; i < question2.length; i++) {
		var alp = ["1A", "1B", "1C", "1D", "1E", "1F", "1G", "1H"];
		if (question2[i].checked == true) {
			if (window.localStorage.getItem(alp[i]) == undefined) {
				window.localStorage.setItem(alp[i], 1);
			}
			else {
				var a = parseInt(window.localStorage.getItem(alp[i])) + 1;
				var b = a.toString();
				localStorage.setItem(alp[i], b);
			}
		}
	}
	var question2 = document.getElementsByName("2");
	for (var i = 0; i < question2.length; i++) {
		var alp = ["2A", "2B", "2C", "2D", "2E", "2F", "2G", "2H"];
		if (question2[i].checked == true) {
			if (window.localStorage.getItem(alp[i]) == undefined) {
				window.localStorage.setItem(alp[i], 1);
			}
			else {
				var a = parseInt(window.localStorage.getItem(alp[i])) + 1;
				localStorage.setItem(alp[i], a);
			}
		}
	}
	var question2 = document.getElementsByName("3");
	for (var i = 0; i < question2.length; i++) {
		var alp = ["3A", "3B", "3C", "3D", "3E", "3F", "3G", "3H"];
		if (question2[i].checked == true) {
			if (window.localStorage.getItem(alp[i]) == undefined) {
				window.localStorage.setItem(alp[i], 1);
			} else {
				var a = parseInt(window.localStorage.getItem(alp[i])) + 1;
				localStorage.setItem(alp[i], a);
			}

		}
	}
	var question2 = document.getElementsByName("4");
	for (var i = 0; i < question2.length; i++) {
		var alp = ["4A", "4B", "4C", "4D", "4E", "4F", "4G", "4H", "4I", "4J"];
		if (question2[i].checked == true) {
			if (window.localStorage.getItem(alp[i]) == undefined) {
				window.localStorage.setItem(alp[i], 1);
			}
			else {
				var a = parseInt(window.localStorage.getItem(alp[i])) + 1;
				localStorage.setItem(alp[i], a);
			}

		}
	}
	var question2 = document.getElementsByName("5");
	for (var i = 0; i < question2.length; i++) {
		var alp = ["5A", "5B", "5C", "5D", "5E", "5F", "5G", "5H"];
		if (question2[i].checked == true) {
			if (window.localStorage.getItem(alp[i]) == undefined) {
				window.localStorage.setItem(alp[i], 1);
			} else {
				var a = parseInt(window.localStorage.getItem(alp[i])) + 1;
				localStorage.setItem(alp[i], a);
			}

		}
	}
	var question2 = document.getElementsByName("6");
	for (var i = 0; i < question2.length; i++) {
		var alp = ["6A", "6B", "6C", "6D", "6E", "6F", "6G", "6H"];
		if (question2[i].checked == true) {
			if (window.localStorage.getItem(alp[i]) == undefined) {
				window.localStorage.setItem(alp[i], 1);
			} else {
				var a = parseInt(window.localStorage.getItem(alp[i])) + 1;
				localStorage.setItem(alp[i], a);
			}

		}
	}
	var question2 = document.getElementsByName("7");
	for (var i = 0; i < question2.length; i++) {
		var alp = ["7A", "7B", "7C", "7D", "7E", "7F", "7G", "7H"];
		if (question2[i].checked == true) {
			if (window.localStorage.getItem(alp[i]) == undefined) {
				window.localStorage.setItem(alp[i], 1);
			} else {
				var a = parseInt(window.localStorage.getItem(alp[i])) + 1;
				localStorage.setItem(alp[i], a);
			}
		}
	}
	var question2 = document.getElementsByName("8");
	for (var i = 0; i < question2.length; i++) {
		var alp = ["8A", "8B", "8C", "8D", "8E", "8F", "8G", "8H"];
		if (question2[i].checked == true) {
			if (window.localStorage.getItem(alp[i]) == undefined) {
				window.localStorage.setItem(alp[i], 1);
			} else {
				var a = parseInt(window.localStorage.getItem(alp[i])) + 1;
				localStorage.setItem(alp[i], a);
			}
		}
	}
	var question2 = document.getElementsByName("9");
	for (var i = 0; i < question2.length; i++) {
		var alp = ["9A", "9B", "9C", "9D", "9E", "9F", "9G", "9H"];
		if (question2[i].checked == true) {
			if (window.localStorage.getItem(alp[i]) == undefined) {
				window.localStorage.setItem(alp[i], 1);
			} else {
				var a = parseInt(window.localStorage.getItem(alp[i])) + 1;
				localStorage.setItem(alp[i], a);
			}
		}
	}
	var question2 = document.getElementsByName("10");
	for (var i = 0; i < question2.length; i++) {
		var alp = ["10A", "10B", "10C", "10D", "10E", "10F", "10G", "10H"];
		if (question2[i].checked == true) {
			if (window.localStorage.getItem(alp[i]) == undefined) {
				window.localStorage.setItem(alp[i], 1);
			} else {
				var a = parseInt(window.localStorage.getItem(alp[i])) + 1;
				localStorage.setItem(alp[i], a);
			}
		}
	}
}