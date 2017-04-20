var contextMenu = document.getElementById('context-menu');
var wrapper = document.getElementById('wrapper');

wrapper.addEventListener('click', function(){
	wrapper.style.display = "none";
})
contextMenu.addEventListener('click', function(e){
	e.stopPropagation();//предотвращение всплытия
 	
})

document.addEventListener('contextmenu', function(e){
	e.preventDefault()
	contextMenu.style.top = e.clientY+'px';
	contextMenu.style.left = e.clientX+'px';
	wrapper.style.display = "block";

	
	console.log(e.clientY + " " + e.clientX);

})

var a = contextMenu.getElementsByTagName('a');
for(var i = 0; i < a.length; i++){
	a[i].addEventListener('click', function(e){
		e.preventDefault();
		alert(this.innerText);
	})

}