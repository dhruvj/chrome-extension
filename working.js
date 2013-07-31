// JavaScript Document


function countFields() {
	
	return (document.getElementById("inputs").getElementsByTagName("input").length);
	
}

function createFields() {
	
	var oHead = document.getElementById('inputs');
	var input = document.createElement("input");
	input.type = "text";
	input.id = "textfield_" + (countFields() + 1);
	oHead.appendChild(input);
	
}

function deleteFieldInCookie(display_id) {
	
	chrome.cookies.get({
		url : "https://www.facebook.com/",
		name : "chrome_extension_for_facebook"
	}, function (cookie) {
		
		var data = cookie.value;
		var data_array = data.split("|");
		var cookie_content = data.replace(data_array[display_id - 1] + "|", "");
		setCookie(cookie_content);
		display();
		
	});
	
}

/*	function lol(){
var i=0;

chrome.cookies.get({ url: "https://www.facebook.com/" ,name : "chrome_extension_for_facebook" }, function (cookie) {

var data = cookie.value;
for(; i < countFields(); i++){

if(document.getElementById("inputs").getElementsByTagName("input")[i].value != "undefined"){

data += document.getElementById("inputs").getElementsByTagName("input")[i].value;
data += "|";

}
}
chrome.cookies.set({ url: "https://www.facebook.com/" ,name : "chrome_extension_for_facebook", value : data, expirationDate: (new Date().getTime()/1000) + 360000000 } );
display();
});


} */

function setCookieWithCurrentValues() {
	
	var i = 0;
	chrome.cookies.get({
		url : "https://www.facebook.com/",
		name : "chrome_extension_for_facebook"
	}, function (cookie) {
		
		if (!cookie) {
			
			var data = "";
			for (; i < countFields(); i++) {
				
				if (document.getElementById("inputs").getElementsByTagName("input")[i].value != "undefined") {
					var x = document.getElementById("inputs").getElementsByTagName("input")[i].value;
					if (x.length >= 3 && x.length <= 20) {
						data += document.getElementById("inputs").getElementsByTagName("input")[i].value;
						data += "|";
					} else {
						
						alert("Word Length Should Be >=3 AND <= 20");
						
					}
				}
			}
			chrome.cookies.set({
				url : "https://www.facebook.com/",
				name : "chrome_extension_for_facebook",
				value : data,
				expirationDate : (new Date().getTime() / 1000) + 360000000
			});
			display();
			
		} else {
			
			var data = cookie.value;
			for (; i < countFields(); i++) {
				
				if (document.getElementById("inputs").getElementsByTagName("input")[i].value != "undefined") {
					var x = document.getElementById("inputs").getElementsByTagName("input")[i].value;
					if (x.length >= 3 && x.length <= 20) {
						data += document.getElementById("inputs").getElementsByTagName("input")[i].value;
						data += "|";
					} else {
						
						alert("Word Length Should Be >=3 AND <= 20");
						
					}
				}
			}
			chrome.cookies.set({
				url : "https://www.facebook.com/",
				name : "chrome_extension_for_facebook",
				value : data,
				expirationDate : (new Date().getTime() / 1000) + 360000000
			});
			display();
			
		}
		
	});
	//lol();
	
	
}

function display() {
	
	document.getElementById('display').innerHTML = "";
	chrome.cookies.get({
		url : "https://www.facebook.com/",
		name : "chrome_extension_for_facebook"
	}, function (cookie) {
		if (!cookie) {}
		else {
			var data = cookie.value;
			
			data = data.split("|");
			var i = 1;
			for (; i < data.length; i++) { //  ' = ' May Problem With Display !
				
				var oHead = document.getElementById('display');
				var input = document.createElement("li");
				input.innerHTML = data[i - 1];
				input.id = "display_" + (i);
				input.addEventListener("click", function () {
					var x = this.id.split("").reverse().join("")[0];
					deleteFieldInCookie(x);
					/*chrome.tabs.reload(); */
				});
				oHead.appendChild(input);
				
			}
		}
		
	});
	
}

/* Always Call Display() after Calling setCookie() */

function setCookie(data) {
	
	chrome.cookies.set({
		url : "https://www.facebook.com/",
		name : "chrome_extension_for_facebook",
		value : data,
		expirationDate : (new Date().getTime() / 1000) + 360000000
	});
	
}

document.addEventListener("DOMContentLoaded", function () {
	
	display();
	document.getElementById("addMore").addEventListener("click", createFields);
	document.getElementById("hideThesePosts").addEventListener("click", setCookieWithCurrentValues);
	//document.getElementById("changewall").addEventListener("click", setCookieWithCurrentValues);
	
});
