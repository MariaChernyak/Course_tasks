var audio = document.getElementsByTagName('audio')[0];
var player = document.querySelector('.player');
var play = document.getElementById('play')
audio.addEventListener('loadedmetadata', fill);
play.addEventListener('click', audioPlay);
player.querySelector('.stop').addEventListener('click', audioStop);
player.querySelector('.slower').addEventListener('click',audioSlower);
player.querySelector('.faster').addEventListener('click',audioFaster);
player.querySelector('.muted').addEventListener('click', audioMuted);
player.querySelector('.range').addEventListener('input', changeRange);
audio.addEventListener('play', audioCurrentTime);
audio.addEventListener('play', audioProgress);
player.querySelector('.progressBar').addEventListener('click', changeProgress);
audio.addEventListener('pause', stopCurrentTime);

var interval;
function audioPlay(){
	if(this.classList.contains('play')){
		audio.play();
		this.classList.remove('play');
		this.classList.add('pause');
	}
	else{
		audio.pause();
		this.classList.remove('pause');
		this.classList.add('play');
	}
}
function audioStop(){
	audio.pause();
	audio.currentTime = 0;
	if(play.classList.contains('pause')){
		play.classList.remove('pause');
		play.classList.add('play');
	}
}
function audioSlower(){
	audio.playbackRate /= 1.25;
}
function audioFaster(){
	audio.playbackRate *=1.25;
}
function audioMuted(){
	if(this.classList.contains('muted')){
		audio.muted = true;
		this.classList.remove('muted');
		this.classList.add('active');
	}
	else{
		audio.muted = false;
		this.classList.remove('active');
		this.classList.add('muted');
	}
}
function changeRange(){
	audio.volume = this.value;
}
function fill(){
	var time = audio.duration;
	var str;
	var minutes = parseInt(time/60);
	if(parseInt(minutes/10) == 0){
		str = '0' + minutes;
	}
	else{
		str = minutes;
	}
	var seconds = Math.ceil(time - minutes*60)
	if(parseInt(seconds/10) == 0){
		str += ":0" + seconds;
	}
	else{
		str += ":" + seconds;
	}
	player.querySelector('.time').innerText = str;

}
function audioCurrentTime(){
	interval = setInterval(function(){
		var time = audio.currentTime;
	var str;
	var minutes = parseInt(time/60);
	if(parseInt(minutes/10) == 0){
		str = '0' + minutes;
	}
	else{
		str = minutes;
	}
	var seconds = Math.ceil(time - minutes*60)
	if(parseInt(seconds/10) == 0){
		str += ":0" + seconds;
	}
	else{
		str += ":" + seconds;
	}
	player.querySelector('.currentTime').innerText = str;
		
	}, 1000)
}
function stopCurrentTime(){
	clearInterval(interval);
}
function audioProgress(){
	var progress = player.querySelector('.progress');
		var interval = setInterval(function(){
		var time = audio.currentTime*100/audio.duration;
		progress.style.width = time +'%';
	}, 500);

}
function changeProgress(e){
	var progressBar = player.querySelector('.progressBar');
	var progress = player.querySelector('.progress');
	var widthProgressBar = progressBar.clientWidth;
	var left =progressBar.getBoundingClientRect().left;
	var percent = (e.clientX - left)/widthProgressBar;
	console.log(percent);
	audio.currentTime = audio.duration * percent;
}