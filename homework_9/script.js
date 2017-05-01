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
			return this.dateDue - this.date;
		}
	})
}
function Shop(name, adress, products, markup, income){
	this.name = name;
	this.adress = adress;
	this.products = products;
	this.markup = markup;
	this.income = income;
	Object.defineProperty(this, "sum", {
		get: function(){
			var sum = 0;
			for(var i = 0; i < this.products.length; i++){
				sum += this.products[i].cost;
			}
			return sum;
		}
	})
}

Shop.prototype.addProducts = function(t,n){
	for(var i = 0; i < n; i++){
		// var product = new Product(t);
		this.products.push(t);
	}
}
Shop.prototype.deleteProducts = function(t, n){
	for(var i = 0; i < this.products.length; i++){

	}
}
Shop.prototype.outputInfo = function(){
	var str;
	str + = this.name;
	str += ", " + this.adress;
	return str;
}
var o = new Foodstuffs('Товар', 'продовольствие', 20000, '2017-02-12', '2018-02-12');