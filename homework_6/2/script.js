//RSA
var e = 109;
var n = 22601;
var d = 613;
var str2= "";

var text = document.getElementById('text');
var cipher = document.getElementById('cipher');
var textButton = document.getElementById('textButton');
var cipherButton = document.getElementById('cipherButton');
cipherButton.onclick = function(){
	var str = text.value;
	str2 = "";
	for(var i = 0; i< str.length; i++){
		if(i == str.length-1){
			str2 += faststep(str[i].charCodeAt(),e, n);
		}
		else{
			str2 += faststep(str[i].charCodeAt(),e, n) + " ";
		}
	}
	cipher.value = str2;
}
textButton.onclick =function(){
	var arr = cipher.value.split(" ");
	str2 = "";
	for(var i = 0; i< arr.length; i++){
		str2 += String.fromCharCode(faststep(arr[i], d, n));

	}
	text.value = str2;
	

}

//быстрое возведение в степень (с википедии)
function faststep (val, step, mod) {
	mod = parseInt(mod);
	s = 1; v = step; c = val;
	while (v != 0) {
		flag = 0;
		if (v%2 == 1) {
			if (!mod) 
				s = s*c;
			else
				s = (s*c) % mod;
			v = (v-1)/2;
			if (!mod)
				c = c*c;
			else
				c = (c*c) % mod;
			flag = 1;
		}
		else {
			v = v/2;
		}
		if (!flag) 
			if (!mod) 
				c = c*c;
			else
				c = (c*c) % mod;	
	}
	return s;
}