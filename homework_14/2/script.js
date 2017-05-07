var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var img = new Image(); 
	img.src = "img.png";
    img.onload = function() {
	    ctx.drawImage(img, 0, 0, 300, 220);
	    var data = ctx.getImageData(0, 0, 400, 300);
		var result = filter(data);
		ctx.putImageData(result, 0,0)
	}


function filter(data){
	var pixels = data.data;

	for(var i = 0; i< pixels.length; i+=4){
		var r = pixels[i];
		var g = pixels[i+1];
		var b= pixels[i+2];
		var gray = r * 0.3 + g * 0.59 + b * 0.11
		pixels[i] = gray;
		pixels[i+1] = gray;
		pixels[i+2]  = gray;
	}

	return data;
}