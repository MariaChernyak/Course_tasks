var row = document.getElementsByTagName('tr');
// var column = document.createElement('td');
// column.innerHTML = window.location.href;
row[0].innerHTML += "<td>" + window.location.href + "</td>";
row[1].innerHTML += "<td>" + window.location.host + "</td>";
row[2].innerHTML += "<td>" + window.location.protocol + "</td>";
row[3].innerHTML += "<td>" + window.location.port + "</td>";
row[4].innerHTML += "<td>" + window.location.search + "</td>";
row[5].innerHTML += "<td>" + window.location.hash + "</td>";
row[6].innerHTML += "<td>" + window.screen.width + "</td>";
row[7].innerHTML += "<td>" + window.screen.height + "</td>";
row[8].innerHTML += "<td>" + window.screen.availWidth + "</td>";
row[9].innerHTML += "<td>" + window.screen.availHeight + "</td>";
row[10].innerHTML += "<td>" + window.screen.colorDepth + "</td>";
row[11].innerHTML += "<td>" + window.screen.orientation.type + "</td>";
row[12].innerHTML += "<td>" + window.navigator.appCodeName + "</td>";
row[13].innerHTML += "<td>" + window.navigator.appName + "</td>";
row[14].innerHTML += "<td>" + window.navigator.userAgent + "</td>";
row[15].innerHTML += "<td>" + window.navigator.cookieEnabled + "</td>";
row[16].innerHTML += "<td>" + window.navigator.javaEnabled() + "</td>";
row[17].innerHTML += "<td>" + window.navigator.onLine + "</td>";
row[18].innerHTML += "<td>" + window.innerHeight+ "</td>";
row[19].innerHTML += "<td>" + window.innerWidth+ "</td>";
row[20].innerHTML += "<td>" + window.screenX+ "</td>";
row[21].innerHTML += "<td>" + window.screenY+ "</td>";
row[22].innerHTML += "<td>" + window.scrollX+ "</td>";
row[23].innerHTML += "<td>" + window.scrollY+ "</td>";

	// .href //полный адрес страницы на которой находимся
	// .host//доменное имя
	// .protocol//
	// .port 
	// .search
	// .hash
	// .assign(s)// открывает страницу с этим адресом
	// .reload()//обновляет страницу

	// .width	//размеры экрана (не окна блаузера)
	// .height
	// .availWidth//размер полезной области
	// .availHeight
	// .colorDepth//лубина цветопередачи
	// .orientation()//ориентация экрана

	// window.navigator
	// .appCodeName
	// .appName 
	// .userAgent         //тоже самое что при httml запросе
	// .cookieEnabled //включены ли куки
	// .javaEnabled()// доступна ли джава
	// .onLine	// true , если в сети


// window.innerWidth
// 	.innerHeight//размеры области просмотра
// 	.screenX//насколько окно бровзера отстает от левого края экрана
// 	.screenLeft// y
// 	.screenY 
// 	.screenTop
// 	.scrollX// насколько проскролена страницы
// 	.scrollY
