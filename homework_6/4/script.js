var str="";
var display = document.getElementById('display');
var equally = document.getElementById('equally');
var buttons = document.getElementsByClassName('button');
var operator;
var result;
var operand1 = "";
var operand2 = "";
var memory = 0;
//обработчики событий для цифр и точки
for(var i=0; i< buttons.length; i++){
	buttons[i].onclick = function(){
		if(isFinite(operand1)){
			if(this.innerText == "."){
				if(!str.includes(".") && str.length){
					str += this.innerText;
				}
			}
			else{
				str += this.innerText;
			}		
		}
		else{
			operand1 = "";
			str = this.innerText
		}
		display.innerText = str;
	}
}
var operators = document.getElementsByClassName('operator');
//обработчики событий для операторов
for(var i = 0; i< operators.length; i++){
	operators[i].onclick = function(){
		if(operand1 === ""){
			operand1 = str;
			operator =this.innerText;
			str = "";
		}
		else {
			if(str!==""){
				operand2 =str;
				str = operation(operand1, operator, operand2);
				display.innerText = str;
				operand1 = str;
				str="";
				operand2 = "";
				operator = this.innerText;
			}
			else{
				operator = this.innerText;
			}
		}
	}
}
//знак равенства
var equally = document.getElementById('equally');
equally.onclick = function(){
	if((operand1 !== "") && (str!="")){

		operand2 =str;
		str = operation(operand1, operator, operand2);
		display.innerText = str;
		operand1 = str;
		str="";
		operand2 = "";
		
	}
}
//очистка экрана
var clean = document.getElementById('clean');
clean.onclick = function(){
	operator = "";
	operand1 = "";
	operand2 = "";
	str = "";
	display.innerText = "";
}
//работа с памятью
var mPlus = document.getElementById('mPlus');
var mMinus = document.getElementById('mMinus');
var mr = document.getElementById('mr');
var mc = document.getElementById('mc');

mPlus.onclick = function(){
	if(isFinite(display.innerText)){
		memory += parseFloat(display.innerText);
	}
}
mMinus.onclick = function(){
	if(isFinite(display.innerText)){
		memory -= parseFloat(display.innerText);
	}
}
mr.onclick = function(){
	display.innerText = memory;
	str = "";
	operand1 = memory;
	operand2 = "";
	operator = "";
}
mc.onclick = function(){
	memory = 0;

}
function operation(operand1, operator, operand2){
	
	switch(operator){
		case "+": return (parseFloat(operand1)*1000 + parseFloat(operand2)*1000)/1000;
		case "-": return (parseFloat(operand1)*1000 - parseFloat(operand2)*1000)/1000;
		case "/": 
			if(operand2 != "0"){
				return parseFloat(operand1) / parseFloat(operand2);
			}
			else{
				return 'Ошибка';
			}
		case "*": return parseFloat(operand1) * parseFloat(operand2);
	
	}
}
