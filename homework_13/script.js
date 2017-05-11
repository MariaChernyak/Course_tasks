function bold(){
	document.execCommand('bold', false, null);
}
function underline(){
	document.execCommand('underline', false, null);
}
function italic(){
	document.execCommand('italic', false, null);
}
function fontsize(){
	var size = document.querySelector('.size').value;
	console.log(size);
	document.execCommand('fontsize', false, size);
}
function fontcolor(){
	var color = document.querySelector('.color').value;
	document.execCommand('forecolor', false, color);
}
function highlight(){
	document.execCommand('backcolor', false, "#98FB98");
}
function insertUnorderedList(){
	document.execCommand('InsertUnorderedList', false, null);
}
function indent(){
	document.execCommand('indent', false, null);
}
function outdent(){
	document.execCommand('outdent', false, null);
}
function juitifyLeft(){
	document.execCommand('justifyleft', false, null);
}
function justifyCenter(){
	document.execCommand('justifycenter', false, null);
}
function justifyRight(){
	document.execCommand('justifyright', false, null);
}
function fontname(){
	var font = document.querySelector('.fontFamily').value;
	document.execCommand('fontname', false, font);
}
function link(){
	var link = prompt("Введите ссылку: ")
	document.execCommand('createlink', false, link);
}
function unlink(){
	document.execCommand('unlink', false, null);
}