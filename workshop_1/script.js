var N = 10;
var G = 1000;
var galaxy = document.getElementById('galaxy');
var fractions = [];
for(var i =0; i< N; i++){
	fractions[i] = {
		m: Math.random()*20,
		ox: Math.random()*galaxy.clientWidth,
		oy: Math.random()*galaxy.clientHeight,
		vx: -2+ Math.random()*5,
		vy: -2 +Math.random()*5,
	}
}
for(var i =0; i< N; i++){
	var fraction = document.createElement('div');
		galaxy.appendChild(fraction);
}

change();

function change(){
setInterval(function(){

		var els = document.getElementById("galaxy").children;
		for(var index=0; index<N;index++){
				var el = els[index];
					
				el.style.left = fractions[index].ox + 'px';
				el.style.top = fractions[index].oy+'px';
				fractions[index].oy += fractions[index].vy;
				fractions[index].ox += fractions[index].vx;

				if(fractions[index].ox < 0){
					fractions[index].ox = 0;
					fractions[index].vx = 0;
				}

				if(fractions[index].ox > galaxy.clientWidth -el.clientWidth){
					fractions[index].ox = galaxy.clientWidth -el.clientWidth;
					fractions[index].vx = 0;
				}

				if(fractions[index].oy < 0){
					fractions[index].oy = 0;
					fractions[index].vy = 0;
				}

				if(fractions[index].oy > galaxy.clientHeight-el.clientHeight){
					fractions[index].oy = galaxy.clientHeight-el.clientHeight
					fractions[index].vy = 0;
				}
				fractions[index].vx += getSpeedUpX(fractions[index].ox, fractions[index].oy, root.x, root.y, root.M);
				fractions[index].vy += getSpeedUpY(fractions[index].ox, fractions[index].oy, root.x, root.y, root.M);

				if(rootMouse.x >=0 && rootMouse.y >=0 && rootMouse.x <=galaxy.clientWidth && rootMouse.y <=galaxy.clientHeight){
						fractions[index].vx += getSpeedUpX(fractions[index].ox, fractions[index].oy, rootMouse.x, rootMouse.y, rootMouse.M);
						fractions[index].vy += getSpeedUpY(fractions[index].ox, fractions[index].oy, rootMouse.x, rootMouse.y, rootMouse.M);
				}
		}
	},100)
}
var root = {
	M: 100,
	x: galaxy.clientWidth/2,
	y: galaxy.clientHeight
}
var rootMouse = {
	M: 100,
	x: -1,
	y: -1
}
document.addEventListener('mousemove', function(e){
	rootMouse.x = e.pageX - galaxy.offsetLeft;
	rootMouse.y = e.pageY - galaxy.offsetTop;
	console.log(rootMouse.x + " " + rootMouse.y);
})

var root1 = document.getElementById('root1');

root1.addEventListener('change', function(){
	root.M = parseFloat(root1.value);
})

var root2 = document.getElementById('root2');

root2.addEventListener('change', function(){
	rootMouse.M = parseFloat(root2.value);
})

function getDistance(x, y , x0, y0){
	return Math.sqrt(Math.pow((x0-x), 2)+Math.pow((y0-y),2));
}

function getSpeedUpX(x, y , x0, y0, M){
	if(getDistance(x, y , x0, y0)){

		return G*M*(x0-x)/Math.pow(getDistance(x, y , x0, y0),3);
	}
	else{
		return 0;
	}
}

function getSpeedUpY(x, y , x0, y0, M){
	if(getDistance(x, y , x0, y0)){

		return G*M*(y0-y)/Math.pow(getDistance(x, y , x0, y0),3);
	}
	else{
		return 0;
	}
	
}

