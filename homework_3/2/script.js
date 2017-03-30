var names = ["Allen","Bob","Carlton","David","Ernie","Foster","George","Howard","Ian","Jeffery","Kenneth","Lawrence","Michael","Nathen","Orson"];
var numberOfFlats = 4;
var house={

 	tenants: [], 
 	flats: [],
 	addTenant: function(name, number){
 		
 		if(typeof (arguments[0]) == "undefined"){
 			 var name = prompt("Введите имя: ");
 			 var number = parseInt(prompt("Введите номер квартиры: "));
 		}
 		
 		if(isFinite(number) && (number <= this.flats.length) && number ){
	 		this.tenants.push({name: name, flatNumber: number});
	 		this.flats[number-1].tenants.push(name);
	 	}
	 	else{
	 		console.error("Неверный номер квартиры");
	 	}
 	},
 	cleanFlat: function(number){
 		if(typeof (arguments[0]) == "undefined"){
 			var number = parseInt(prompt("Введите номер квартиры: "));
 		}
 		if(isFinite(number) && (number <= this.flats.length) && number){
	 		 this.flats[number-1].tenants.length = 0;
	 		 for(var i = 0; i < this.tenants.length; i++){
	 		 	if(this.tenants[i].flatNumber == number){
	 		 		this.tenants.splice(i, 1);
	 		 		i--;
	 		 	}
	 		 }
 		}
 		else{
 			console.error("Неверный номер квартиры");
 		}

 	},
 	outputListOfTenants: function(number){
 		if(typeof (arguments[0]) == "undefined"){
 			var number = parseInt(prompt("Введите номер квартиры: "));
 		}
 		if(isFinite(number) && (number <= this.flats.length) && number){
 			if(this.flats[number-1].tenants.length){
 				console.log("Жильцы квартиры №" + number + ": " + this.flats[number-1].tenants.join(", "));
 			}
 			else{
 				console.log("В квартире №" + number + " никто не проживает");
 			}
	 	}	
	 	else{
	 		console.error("Неверный номер квартиры");
	 	}
 	},
 	calculateCost: function(sum){
 		if(typeof (arguments[0]) == "undefined"){
 			var sum = parseFloat(prompt("Введите сумму: "));
 		}
 		if(isFinite(parseFloat(sum)) && (sum > 0)){
	 		var totalSquare=0;
	 		var listOfCost = [];

	 		this.flats.forEach(function(e){
	 			if(e.tenants.length){
	 				totalSquare +=e.square;
	 			}
	 		});
	 		this.flats.forEach(function(e){
	 			if(e.tenants.length){
	 				var cost = sum / totalSquare * e.square / e.tenants.length;
	 				e.tenants.forEach(function(c){
	 					listOfCost.push({name: c, cost: cost});
	 				})
	 				
	 			}
	 		})
	 		listOfCost.forEach(function(e){
	 			console.log(""+ e.name + " : " + e.cost.toFixed(3));
	 		})
		}
		else{
			console.error("Неверная сумма");
		}
 	}
}

//заполнение квартир
for(var i = 0; i < numberOfFlats; i++){
	house.flats[i] = {
		square: parseInt(Math.random()*20+20),
		level: parseInt(Math.random()*numberOfFlats/4+1),
		tenants: []
	}
}
//заполнение жильцов
for(var i=0; i<names.length; i++){
	house.tenants[i] = {
		name: names[i],
		flatNumber: parseInt(Math.random()*1000%numberOfFlats+1)
	}
	house.flats[house.tenants[i].flatNumber-1].tenants.push(names[i]) ;
}
console.log(house);
house.outputListOfTenants(1);
console.log("Количество жильцов в доме: " + house.tenants.length);
house.addTenant("Alex", 1);
house.outputListOfTenants(1);
console.log("Количество жильцов в доме: " + house.tenants.length);
house.cleanFlat(1);
house.outputListOfTenants(1);
console.log("Количество жильцов в доме: " + house.tenants.length);
house.calculateCost(1500);
console.log(house);


