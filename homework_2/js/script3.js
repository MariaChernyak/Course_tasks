var n = parseInt(prompt("Введите количество элементов массива:"));
var x = Number(prompt("Введите x:"));
if(isFinite(n)&&isFinite(x)){
var arr = [];
var sum = 0;
for(var i = 0; i <= n; i++){
	arr[i] = Number(prompt("ВВедите а"+ i));
	if(isFinite(arr[i])){
		sum += arr[i]*Math.pow(x, i);
	}
	else{
		alert("Введено не число");
		break;
	}
}
console.log("x=" + x + ", ai=" + arr);
console.log("a0 + a1* x^2 + ... + an*x^n = " + sum);
}
else{
	alert("Введены неверные данные")
}
