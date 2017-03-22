var str = prompt("Введите строку");
var counter = 0;
for(var i = 0; i < str.length; i++){
	if(str[i] === "("){
		counter++;
	}
	if(str[i] === ")"){
		counter--;
	}
	if(counter < 0){
		break;
	}
}
if(counter){
	alert("Скобки расставлены неверно");
}
else{
	alert("Скобки расставлены верно");
}
