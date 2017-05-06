var video = document.getElementsByTagName('video')[0];
var player = document.querySelector('.player');
var play = document.getElementById('play')
video.addEventListener('loadedmetadata', fill);
play.addEventListener('click', videoPlay);
player.querySelector('.stop').addEventListener('click', videoStop);
player.querySelector('.slower').addEventListener('click',videoSlower);
player.querySelector('.faster').addEventListener('click',videoFaster);
player.querySelector('.muted').addEventListener('click', videoMuted);
player.querySelector('.range').addEventListener('input', changeRange);
video.addEventListener('play', activevideo);
// video.addEventListener('play', videoProgress);
player.querySelector('.progressBar').addEventListener('click', changeProgress);
video.addEventListener('pause', stopCurrentTime);
video.addEventListener('click', videoPlay);

var interval;
function videoPlay(){
	if(play.classList.contains('play')){
		video.play();
		play.classList.remove('play');
		play.classList.add('pause');
	}
	else{
		video.pause();
		play.classList.remove('pause');
		play.classList.add('play');
	}
}
function videoStop(){
	video.pause();
	video.currentTime = 0;
	if(play.classList.contains('pause')){
		play.classList.remove('pause');
		play.classList.add('play');
	}
	stopCurrentTime();
}
function videoSlower(){
	video.playbackRate /= 1.25;
}
function videoFaster(){
	video.playbackRate *=1.25;
}
function videoMuted(){
	if(this.classList.contains('muted')){
		video.muted = true;
		this.classList.remove('muted');
		this.classList.add('active');
	}
	else{
		video.muted = false;
		this.classList.remove('active');
		this.classList.add('muted');
	}
}
function changeRange(){
	video.volume = this.value;
}
function fill(){
	var time = video.duration;
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
function activevideo(){
	interval = setInterval(function(){
		var time = video.currentTime;
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

		var progress = player.querySelector('.progress');
		var time = video.currentTime*100/video.duration;
		progress.style.width = time +'%';
		
	}, 500)
}

function stopCurrentTime(){
	clearInterval(interval);
}

function changeProgress(e){
	var progressBar = player.querySelector('.progressBar');
	var progress = player.querySelector('.progress');
	var widthProgressBar = progressBar.clientWidth;
	var left =progressBar.getBoundingClientRect().left;
	var percent = (e.clientX - left)/widthProgressBar;
	video.currentTime = video.duration * percent;
}