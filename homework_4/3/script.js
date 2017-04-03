function change(x){
	return Math.pow(x, 2);
}
var x = 1;
var id = setInterval(function(){
	window.scrollBy(0, change(x));
		x++;
	if( window.scrollY + window.innerHeight >= 10000){
		clearInterval(id);
	}
			
}, 150)