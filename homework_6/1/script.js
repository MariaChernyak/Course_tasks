var elements = 0;
var comments = 0;
var text = 0;

var f = function(element){
	console.log(element);
	switch(element.nodeType){
		case 1: elements++; 
			break;
		case 3: text++; 
			break;
		case 8: comments++; 
			break;
	
	}
	if(element.childNodes.length){
		for (var i = 0; i < element.childNodes.length; i++) {
			f(element.childNodes[i]);
		}
	}
}
f(document);
console.log("Количество тегов: " + elements);
console.log("Количество комментариев: " + comments);
console.log("Количество текстовых узлов: " + text);