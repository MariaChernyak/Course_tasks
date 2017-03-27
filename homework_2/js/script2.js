var date = new Date();
console.log(""+ date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
var hours = 24 - date.getHours();
var minutes = 60 - date.getMinutes();
var seconds = 60 - date.getSeconds();
if(seconds!=60){
	minutes--;
	hours--;
}
else {
	seconds =0;
	if(minutes!=60){
		hours--;
	}	
	else {
		minutes = 0;
	}
}

if(hours < 10){
	hours = '0' + hours;
}
if(minutes < 10){
	minutes = '0' + minutes;
}
if(seconds < 10){
	seconds = '0' + seconds;
}
alert("До конца дня осталось: "+ hours + ":" + minutes + ":" + seconds);