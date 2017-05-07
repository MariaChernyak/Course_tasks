	
	setInterval(drawingClock, 1000);
function drawingClock(){
	var canvas = document.querySelector('canvas');
	var ctx = canvas.getContext('2d');
	var date = new Date();
	ctx.strokeStyle = "#FFE4C4";
	ctx.fillStyle = "#FDF5E6";
	ctx.lineWidth = 4;
	ctx.clearRect(0, 0, 400, 400);
	ctx.beginPath();
	ctx.arc(200, 200, 150, 0, 7);
	ctx.fill();
	ctx.stroke();
	ctx.save();

	ctx.translate(200, 200);
	ctx.save();

	for(var i = 12; i > 0; i--){
		ctx.beginPath();
		ctx.moveTo(150, 0);
		ctx.lineTo(120, 0);
		ctx.stroke();
		ctx.rotate(-Math.PI/6);
	}
	ctx.restore()
	ctx.rotate(-Math.PI/2);

	ctx.save();

	//часовая стрелка
	ctx.lineWidth = 6;
	ctx.rotate(Math.PI/6*date.getHours() + Math.PI/360*date.getMinutes() + Math.PI/21600*date.getSeconds());
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(65, 0);
	ctx.stroke();

	//минутная
	ctx.restore();
	ctx.save();
	ctx.lineWidth = 4;
	ctx.rotate(Math.PI/30*date.getMinutes() + Math.PI/1800*date.getSeconds());
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(80, 0);
	ctx.stroke();
	
	//секундная
	ctx.restore();
	ctx.save();
	ctx.lineWidth = 2;
	ctx.rotate(Math.PI/30*date.getSeconds());
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(100, 0);
	ctx.stroke();

	ctx.restore();
	ctx.restore();
}