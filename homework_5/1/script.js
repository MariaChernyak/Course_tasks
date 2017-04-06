// var N = parseInt(prompt("число:"));
var N= 20;
var M=25;
var table = document.getElementById('table');
for(var i = 0; i < N; i++){
	var tr = document.createElement('tr');
	for(var j = 0; j<M; j++){
		var td = document.createElement('td');
		if(!i){
			if(j){
				td.innerHTML = j;
			}
		}
		else{
			if(!j){
				if(i){
					td.innerHTML = i;
				}
			}
			else{
				td.innerHTML = i * j;
				if(i == j){
					td.setAttribute("class", "red");
				}
			}
		} 
		
		tr.appendChild(td);
	
	}
	table.appendChild(tr);
}