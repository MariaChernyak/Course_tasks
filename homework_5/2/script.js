var countries = [];

countries[0] = {
	flag: "0.jpg",
	name: "Австралия",
	population: 22507617,
	code: "61"
}
countries[1] = {
	flag: "1.jpg",
	name: "Австрия",
	population: 8223062,
	code: "43"
}
countries[2] = {
	flag: "2.jpg",
	name: "Азербайджан",
	population: 9686210,
	code: "944"
}
countries[3] = {
	flag: "3.jpg",
	name: "Албания",
	population: 3020209,
	code: "355"
}
countries[4] = {
	flag: "4.jpg",
	name: "Алжир",
	population: 38813722,
	code: "21"
}
countries[5] = {
	flag: "5.jpg",
	name: "Ангола",
	population: 19088106,
	code: "244"
}
countries[6] = {
	flag: "6.jpg",
	name: "Андорра",
	population: 85458,
	code: "376"
}
countries[7] = {
	flag: "7.jpg",
	name: "Антигуа",
	population: 91295,
	code: "264"
}
countries[8] = {
	flag: "8.jpg",
	name: "Аргентина",
	population: 43024374,
	code: "54"
}
countries[9] = {
	flag: "9.jpg",
	name: "Армения",
	population: 3060631,
	code: "374"
}
countries[10] = {
	flag: "10.jpg",
	name: "Афганистан",
	population: 31822848,
	code: "93"
}
countries[11] = {
	flag: "11.jpg",
	name: "Багамские острова",
	population: 321834,
	code: "1"
}
var table = document.createElement('table');
var thead = document.createElement('thead');
var tr = document.createElement('tr');

	for(var i = 0; i < 4; i++){
		var th = document.createElement('th');
		switch(i){
			case 0: th.innerHTML = "Флаг";
				break;
			case 1: th.innerHTML = " Страна";
				break;
			case 2: th.innerHTML = " Население";
				break
			case 3: th.innerHTML = "Код";	
				break;
		}
		tr.appendChild(th);

	}
thead.appendChild(tr);
table.appendChild(thead);
var tbody = document.createElement('tbody');
var tr;
	for(var i = 0; i < countries.length; i++){
		tr = document.createElement('tr');
			for(var j = 0; j < 4; j++){
				var td = document.createElement('td');
				switch(j){
					case 0: td.innerHTML = "<img src =\"img/" + countries[i].flag + "\">";
						break;
					case 1: td.innerHTML = countries[i].name;
						break;	
					case 2: td.innerHTML = countries[i].population;
						break;	
					case 3: td.innerHTML = countries[i].code;
						break;		
				}	
				tr.appendChild(td);
			}
		tbody.appendChild(tr);	

	}
table.appendChild(tbody);
document.body.appendChild(table);	