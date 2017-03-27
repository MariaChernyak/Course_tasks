var n = parseInt(prompt("Введите количество элементов массива:"));
var s = parseInt(prompt("Введите s"));
var p = parseInt(prompt("Введите p"));
var arr = [];

if(isFinite(n) && isFinite(p) && isFinite(s)){
	for(var i = 0; i < n; i++){
	
	arr[i]=parseInt(Math.random()*s*p%(s*p/50) + s*(1-p/100));
	
}
var max;
var maxIndex;
var sum = 0;
console.log(arr);
for(var j=0; j<n; j++){
	max = arr[0];
	maxIndex = 0;
	for(var  i =0; i < n-j; i++){
		if(arr[i] > max){
			max = arr[i];
			maxIndex = i;
			
		}

	}
	arr[maxIndex] = arr[n-j-1];
	arr[n-j-1] = max;
	sum += max;
}
console.log(arr);
console.log("Сумма: " + sum);
console.log("Среднее арифметическое: " + sum/n);
}
else{
	alert("Введены неверные данные")
}