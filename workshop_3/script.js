/*
Разработать приложение для работы на карте.
*/

var arrCategories =[]; //переменная, в которой будет храниться массив категорий
var currentCategory =[];// массив с точками выбранной категории 
var mapBlock = document.querySelector('.map'); // блок, в котором будет находиться карта
var map; //карта
var currentCoord ={}; // объект с координатами текущего местоположения
var infoWindowArray =[]; //массив информационных окон к выбранной категории
var markersArray =[]; // массив маркеров выбранной категории
var route = []; // массив точек маршрута
var distanceRoute = 0;


var xhr = new XMLHttpRequest();

xhr.open("GET", "json.json" , true); 
xhr.onload = function(){
	arrCategories = JSON.parse(xhr.responseText);
	navigator.geolocation.getCurrentPosition(function(d){ 
		var coords = new google.maps.LatLng(d.coords.latitude, d.coords.longitude);
		currentCoord.coordslat = d.coords.latitude;
		currentCoord.coordslng = d.coords.longitude;
		route.push(currentCoord);
				
		var setting = { 
			zoom: 6, 
			center : coords, 
			mapTypeId : google.maps.MapTypeId.ROADMAP 
		} 

			createListCategory();
		map = new google.maps.Map(mapBlock,setting);
		var marker = new google.maps.Marker({
		    position: coords,
		    map: map,
		    icon: "marker.png",
		    title: "Вы находитесь тут"
		  });
		openListPoints(arrCategories[1]);

	});

}
xhr.send();


//отображает список категорий 
function createListCategory(){
	for(var i = 0; i < arrCategories.length; i++){
		var li = document.createElement('li');
		li.innerHTML = "<a href='#' role='button' id='" + i + "'>" + arrCategories[i].name + "</a>";

		li.querySelector('a').addEventListener('click', function(e){
			e.preventDefault();
			openListPoints(arrCategories[this.id])
		})
		document.querySelector('.category').appendChild(li);
	}
}

//перенос центра карты в выбранную точку
function zoomIn(){
	var id = parseInt(this.id);
	map.setCenter(new google.maps.LatLng(currentCategory[id].coordslat, currentCategory[id].coordslng));
	for(var i = 0; i < infoWindowArray.length; i++){
		infoWindowArray[i].close();
	}
	infoWindowArray[id].open(map, markersArray[id]);
	 document.querySelector('.buttonAddition').addEventListener('click', addPointToRoute);
}

//добавление точки в маршрут
function addPointToRoute(){

	var id = parseInt(this.id);
	route.push(currentCategory[id]);
	var li = document.createElement('li');
	li.innerHTML = "<h3>" + currentCategory[id].name + "</h3><p>" + currentCategory[id].text + "</p>";
	var length = route.length;
	var distance = calcDistanse(route[length - 2].coordslat, route[length - 2].coordslng, route[length - 1].coordslat, route[length - 1].coordslat );
	distanceRoute += distance;
	li.innerHTML += "<span>" + distance + "km</span>";
	document.querySelector('.route').appendChild(li);
	drawRoute(route[length - 2] , route[length - 1]);
	document.querySelector('.distance').innerHTML = distanceRoute + ' km';
	
}
//рисование пути между двумя точками. Принимает 2 объекта точек
function drawRoute(first, second){
	
	var flightPlanCoordinates = [
	    {lat: first.coordslat, lng: first.coordslng},
	    {lat: second.coordslat, lng: second.coordslng}
  	];
  var flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  flightPath.setMap(map);
}

//вывод точек выбранной категории. Принимает массив точек
function showListPoints(currentCategory){
	var blockCurrentCategory = document.querySelector('.currentCategory');
	blockCurrentCategory.innerHTML = '';
	for(var i = 0; i < currentCategory.length; i++){
		var li = document.createElement('li');
		li.innerHTML = "<a href='#' role='button' id='" + i + "c'>" + currentCategory[i].name + "</a>";
		li.querySelector('a').addEventListener('click', zoomIn);
		blockCurrentCategory.appendChild(li);
	}
}
//добавлеет точкам поле с расстоянием до текущего положени и сортирует по возрастанию длины
function sortPoints(){
	for (var i = 0; i < currentCategory.length; i++) {
		currentCategory[i].distance = calcDistanse(currentCoord.latitude, currentCoord.longitude, currentCategory[i].coordslat, currentCategory[i]. coordslng)
	}
	currentCategory.sort(function( a, b ){
		if (a.distance > b.distance){
			return 1;
		}
		else{
			return -1;
		}
	})
}

//Принимает объект из массива категорий. Открывает Список точек
function openListPoints(object){
	var xhr = new XMLHttpRequest();
	xhr.open("GET", object.path , true);
	xhr.onload = function(){
		currentCategory = JSON.parse(xhr.responseText);
		sortPoints();
		showPoints(currentCategory);
		showListPoints(currentCategory);
	} 
	xhr.send();
	
}

//Очищает массив маркеров, убирает их со страницы
function deleteMarkers(){
	for(var i = 0; i < markersArray.length; i++){
		markersArray[i].setMap(null);
	}
	markersArray.length = 0; 
	infoWindowArray.length = 0;

}

function showPoints(currentCategory){
	deleteMarkers();
	for(var i = 0; i < currentCategory.length; i++){
		createInfoWindow(currentCategory[i], i);
	}
}
//добавляет обработчик для появления информационного окна
function showInfoWindow(marker, infoWindow){
	 marker.addListener('click', function() {
		  	for(var i = 0; i < infoWindowArray.length; i++){
		  		infoWindowArray[i].close();
		  	}
		    infoWindow.open(map, this);
		    document.querySelector('.buttonAddition').addEventListener('click', addPointToRoute);
	 });
}

//создает информационное окно. Принимает индекс точки
function createInfoWindow(currentCategory, i){
	var contentString = "<div class='content'><img src='" + currentCategory.img +"'><h3>"+ currentCategory.name +"</h3><p>"+ currentCategory.text +  '</p></div>';
	contentString += "<button id='" +  i + "b' type ='button'  class='buttonAddition'>Добавить в маршрут</button>"
	var infoWindow = new google.maps.InfoWindow({
	  	  content: contentString
	});
	 	infoWindowArray.push(infoWindow);
		 var coords = new google.maps.LatLng(currentCategory.coordslat, currentCategory.coordslng);
		 var marker = new google.maps.Marker({
		    position: coords,
		    map: map
		 });
	markersArray.push(marker);

	showInfoWindow(marker, infoWindow);
}


//Функция для расчета расстояния между двумя точками на карте
function calcDistanse (lat1, lng1, lat2, lng2){ 
//Перевести в радианы 
	var pi =+ Math.PI/180; 
	var lat1 = lat1 * pi; 
	var lng1 = lng1 * pi; 
	var lat2 = lat2 * pi; 
	var lng2 = lng2 * pi; 
	var r = 6372.797; 
	// косинусы и синусы широт и разницы долгот 
	var cl1 = Math.cos(lat1); 
	var cl2 = Math.cos(lat2); 
	var sl1 = Math.sin(lat1); 
	var sl2 = Math.sin(lat2); 
	var delta = lng2 - lng1; 
	var cdelta = Math.cos(delta); 
	var sdelta = Math.sin(delta); 
	// вычисления длины большого круга 
	var y = Math.sqrt(Math.pow(cl2 * sdelta, 2) + Math.pow(cl1 * sl2 - sl1 * cl2 * cdelta, 2)); 
	var x = sl1 * sl2 + cl1 * cl2 * cdelta; 

	var ad = Math.atan2(y, x); 
	var dist = parseInt(ad * r); 

	return dist; 

}


