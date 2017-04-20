var div = document.getElementById('block');
window.addEventListener('scroll', function(){
	if(document.body.getBoundingClientRect().top < -500 && document.body.getBoundingClientRect().top > -4500){
		div.style.position = "fixed";
		div.style.top = 0;
	}
	else{
		if(document.body.getBoundingClientRect().top >= -500){
			div.style.position ="absolute";
			div.style.top = "500px";
		}
		if(document.body.getBoundingClientRect().top <= -4500){
			div.style.position ="absolute";
			div.style.top = "4500px";
		}
	}
	

})