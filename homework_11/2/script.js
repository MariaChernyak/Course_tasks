var xhr = new XMLHttpRequest();
xhr.open("GET", "file.json" , true); 
xhr.onload = function(){
	var arr = JSON.parse(xhr.responseText);
	var id = setInterval(function(){
		var i = parseInt((arr.length -1)* Math.random());
		var div = document.createElement('div');
		var str = "<div><h2>" + arr[i].name +"</h2><img src='" + arr[i].img + "'><p>Цена: " + arr[i].price +"</p><p>" + arr[i].text + "</p>";
		div.innerHTML = str;
		// clearInterval(id);
		document.body.appendChild(div);
	}, 1000)
}
xhr.send();
