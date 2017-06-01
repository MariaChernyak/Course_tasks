/*
Разработать приложение для работы на карте.
*/
var arrCategories; //переменная, в которой будет храниться массив категорий
var currentCategory;// выбранная категория
var mapBlock = document.querySelector('.map');
var map;

navigator.geolocation.getCurrentPosition(function(d){ 
	var coords = new google.maps.LatLng(d.coords.latitude, d.coords.longitude) 
	var setting = { 
		zoom: 6, 
		center : coords, 
		mapTypeId : google.maps.MapTypeId.ROADMAP 
	} 
	map = new google.maps.Map(mapBlock,setting);
});

var xhr = new XMLHttpRequest();

xhr.open("GET", "json.json" , true); 
xhr.onload = function(){
	arrCategories = JSON.parse(xhr.responseText);

	openListPoints(arrCategories[1]);

	// var markers = [];
	// var distanse = 0;
	// var coordsArray =[];
	// var coords = new google.maps.LatLng(currentCategory.coordslat, currentCategory.coordslng);
	// var setting = {
	// 	zoom: 7,
	// 	center: coords,
	// 	mapTypeId: google.maps.MapTypeId.ROADMAP
	// }
	// var map = new google.maps.Map(mapBlock, setting);


	// for(var i = 0; i< arrCategories.length; i++){
	// 	var coords = new google.maps.LatLng(arrCategories[i].x, arrCategories[i].y)
	// 	coordsArray.push(coords);
	// 	markers[i] = new google.maps.Marker({
	// 		position: coords,
	// 		map: map,
	// 		title: arrCategories[i].name
	// 	})
	// 	if(i < arrCategories.length-1){
	// 		distanse += calcDistanse(arrCategories[i].x, arrCategories[i].y, arrCategories[i+1].x, arrCategories[i+1].y);
	// 	}	
	// }



  // var contentString = "<div class='content'<img src='>" + currentCategory.img +"'><h3>"+ currentCategory.name +"</h3><p>"+ currentCategory.text +  '</p></div>';

  // var infowindow = new google.maps.InfoWindow({
  //   content: contentString
  // });

  // var marker = new google.maps.Marker({
  //   position: coords,
  //   map: map,
  //   title: 'Uluru (Ayers Rock)'
  // });
  // marker.addListener('click', function() {
  //   infowindow.open(map, marker);
  // });
}
xhr.send();


function openListPoints(object){
	console.log(object);
	var xhr = new XMLHttpRequest();
	xhr.open("GET", object.path , true);
	xhr.onload = function(){
		currentCategory = JSON.parse(xhr.responseText);
		console.log(currentCategory);
		showPoints(currentCategory);
	} 
	xhr.send();
	
}
function showPoints(currentCategory){
	
	for(var i = 0; i < currentCategory.length; i++){
		var contentString = "<div class='content'<img src='>" + currentCategory[i].img +"'><h3>"+ currentCategory[i].name +"</h3><p>"+ currentCategory[i].text +  '</p></div>';

	  var infowindow = new google.maps.InfoWindow({
	    content: contentString
	  });
	  var coords = new google.maps.LatLng(currentCategory[i].coordslat, currentCategory[i].coordslng);
	  console.log(currentCategory[i]);
	  var marker = new google.maps.Marker({
	    position: coords,
	    map: map
	  });
	  console.log(map)
	  marker.addListener('click', function() {
	    infowindow.open(map, marker);
	  });
	}
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


