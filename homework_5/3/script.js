var names = ["Allen","Bob","Carlton","David","Ernie","Foster","George",
	"Howard","Ian","Jeffery","Kenneth","Lawrence","Michael","Nathen","Orson",
	"Peter","Quinten","Reginald","Stephen","Thomas","Morris","Victor","Walter",
	"Xavier","Charles","Anthony","Gordon","Percy","Conrad","Quincey",
	"Armand","Jamal","Andrew","Matthew","Mark","Gerald"];
var cities = ["Minsk", "Mogilev", "Grogno", "Gomel", "Brest", "Vitebsk", "Borisov", "Pinsk"];
var goods = [];

goods[0]={
	img: "1.jpg",
	name: "Ваза для цветов"
}
goods[1]={
	img: "2.jpg",
	name: "Шкаф для одежды \"Квадро\""
}
goods[2]={
	img: "3.jpg",
	name: "Кресло-качалка \"Панама\""
}
goods[3]={
	img: "4.jpg",
	name: "Стол \"Формат\""
}

var time = 2500;
var container = document.getElementsByClassName('container');

setInterval(function(){
	time = Math.random()*1800 + 2700;
	el = document.createElement('div');
	var index = parseInt(Math.random() * goods.length);
	str = "<img src=\"img/" + goods[index].img + "\">";
	str += "<p>" + names[parseInt(Math.random() * names.length)] + " из города " + cities[parseInt(Math.random() * cities.length)] ;
	str += " купил " + parseInt(Math.random() * 10 +1) + " ед. " + goods[index].name + "</p>";
	el.innerHTML = str;
	
	var closeIcons = document.createElement('a');
	closeIcons.onclick = function(){
		this.parentNode.remove()
	}
	el.appendChild(closeIcons);

	container[0].appendChild(el);

	
},time)

