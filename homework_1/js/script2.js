var number_1 = prompt("Введите число");
var operation = prompt("Введите операцию");
var number_2 = prompt("Введите число");
var result;
number_1 = parseFloat(number_1);
number_2 = parseFloat(number_2);
if((isFinite(number_1))&&(isFinite(number_2))){

	switch(operation){
		case '+': 
			result = number_1 + number_2; 
			break;
		case '-':
			result = number_1 - number_2; 
			break;
		case '*':
			result = number_1 * number_2; 
			break;	
		case '/':
			result = number_1 / number_2; 
			break;	
		default:
		 	result = "Введена неверная операция";	
	}
}
else{
	result = "Числа введены неверно";
}	
result *= 1000;
result = parseInt(result);
result /= 1000;
alert(result);