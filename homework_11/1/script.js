var menu = document.createElement('ul');
var xhr = new XMLHttpRequest();
xhr.open("GET", "file.json" , true); 
xhr.onload = function(){
	var arr = JSON.parse(xhr.responseText);
	var str = "";
		for(var i = 0; i < arr.length; i++){
			console.log(arr[i].subcategory)
			str += "<li>" + arr[i].category;
			if(arr[i].subcategory.length){
				console.log(i)
				str += "<ul>"
				for(var j = 0; j < arr[i].subcategory.length; j++){
					str += "<li>" + arr[i].subcategory[j] + "</li>";
				}
				str += "</ul>"
			}
			str += "</li>"
		}
		console.log(str)
		menu.innerHTML = str;
		document.body.appendChild(menu);
		
	}
xhr.send();
