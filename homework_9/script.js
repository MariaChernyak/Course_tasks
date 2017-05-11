var shops = document.createElement('div');
document.body.appendChild(shops);
var info = document.createElement('div');
info.classList.add('info');
document.body.appendChild(info);

var id = 0;
function Product( name, type, cost, date){
	this.id = ++id;
	this.name = name;
	this.type = type;
	this.cost = cost;
	this.date = new Date(date);
}
function Foodstuffs(name, type, cost, date, dateDue){
	Product.apply(this, arguments);
	this.dateDue = new Date(dateDue);

	Object.defineProperty(this, "shelfLife", {
		get: function(){
			console.log((this.dateDue - this.date)/86400000);
			return this.dateDue - this.date;
		}
	})
}
function Shop(name, adress, markup){
	this.name = name;
	this.adress = adress;
	this.products = [];
	this.markup = markup;
	this.income = 0;
	Object.defineProperty(this, "sum", {
		get: function(){
			var sum = 0;
			for(var i = 0; i < this.products.length; i++){
				sum += this.products[i].cost;
			}
			return sum;
		}
	})
	// Object.defineProperty(this, "income", {
	// 	get: function(){
	// 		return this.sum*this.markup;
	// 	}
	// })
}

Shop.prototype.addProducts = function(t,n){
	for(var i = 0; i < n; i++){
		// var product = new Product(t);
		this.products.push(t);
	}
}
Shop.prototype.deleteProduct = function(name){
	for(var i = 0; i < this.products.length; i++){
		if(this.products[i].name == name){
			this.products.splice(i, i+1);
		}
	}
}
Shop.prototype.sellProduct = function(name){
	for(var i = 0; i < this.products.length; i++){
		if(this.products[i].name == name){
			this.products.splice(i, i+1);
			this.income += this.products[i].cost;
		}
	}
}
Shop.prototype.outputInfo = function(){
	var str ="";
	str += this.name;
	str += ", " + this.adress;
	console.log(str);
	return str;
}

function Market(){
	this.shop = [];
}

Market.prototype.addShop = function(shop){
	this.shop.push(shop);
	showMarket();
}


var o = new Foodstuffs('хлеб', 'продовольствие', 20000, '2017-02-12', '2018-02-12');
var product = new Foodstuffs('торт', 'продовольствие', 20000, '2017-02-12', '2018-02-12');
var shop1 = new Shop('Магазин1', 'Minsk', 0.2);
shop1.addProducts(o, 2);
var shop2 = new Shop('Магазин2', 'Borisov', 0.2);
shop2.addProducts(product, 2);
var market = new Market();
market.addShop(shop1);
market.addShop(shop2);


showMarket();

function showMarket(){
	shops.innerHTML = "";
	for(var i = 0; i < market.shop.length; i++){
		var div = document.createElement('div');
		div.innerText = market.shop[i].name;
		div.addEventListener('click', showInformation);
		shops.appendChild(div);
	}
}
function showInformation(name){
	for(var i = 0; i < market.shop.length; i++){
		if(market.shop[i].name == this.innerText){
			info.innerText = market.shop[i].outputInfo();
		}
	}
}