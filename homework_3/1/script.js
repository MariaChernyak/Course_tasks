var names = ["Allen","Bob","Carlton",
"David","Ernie","Foster",
"George","Howard","Ian",
"Jeffery","Kenneth","Lawrence",
"Michael","Nathen","Orson",
"Peter","Quinten","Reginald",
"Stephen","Thomas","Morris",
"Victor","Walter","Xavier",
"Charles","Anthony","Gordon",
"Percy","Conrad","Quincey",
"Armand","Jamal","Andrew",
"Matthew","Mark","Gerald"];
var cities = ["Minsk", "Mogilev", "Grogno", "Gomel", "Brest", "Vitebsk", "Borisov", "Pinsk"];
console.log(names.length);
var people = [];
for(var i=0; i < names.length; i++){
	people[i] = {
		name: names[i],
		city: cities[parseInt((i+3)%8)],
		age: parseInt(Math.random()*99)

	}
	console.log("" + people[i].name +" - " + people[i].city +" - " + people[i].age );
}

people.sort(function(a, b){
	return (a.age < b.age)? 1:-1;
})

var ul = document.getElementById("list");
people.forEach(function(e){
	var li = document.createElement('li');
	li.innerHTML = "" + e.name +" - " + e.city +" - " + e.age;
	ul.appendChild(li);
})
