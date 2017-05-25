var arr;
var div = document.querySelector('.map');
var xhr = new XMLHttpRequest();
xhr.open("GET", "json.json" , true); 
xhr.onload = function(){
	arr = JSON.parse(xhr.responseText);
	var markers = [];
	var distanse = 0;
	var coordsArray =[];
	var coords = new google.maps.LatLng(arr[0].x, arr[0].y);
	var setting = {
		zoom: 7,
		center: coords,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(div, setting);
	for(var i = 0; i< arr.length; i++){
		var coords = new google.maps.LatLng(arr[i].x, arr[i].y)
		coordsArray.push(coords);
		markers[i] = new google.maps.Marker({
			position: coords,
			map: map,
			title: arr[i].name
		})
		if(i < arr.length-1){
			distanse += calcDistanse(arr[i].x, arr[i].y, arr[i+1].x, arr[i+1].y);
		}	
	}
	var flightPath = new google.maps.Polyline({
    path: coordsArray,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  flightPath.setMap(map);
  console.log("Длина маршрута: " + distanse +"км");
}
xhr.send();

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


