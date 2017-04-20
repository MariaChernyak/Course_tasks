var li = document.getElementsByTagName('li');
for(var i = 0; i< li.length; i++){
	li[i].addEventListener('click', function(e){
		e.stopPropagation();
		if(this.classList.contains('active')){
			removeClass(this);
		}
		else{
			removeClass(this);
			this.classList.add('active');
			if(this.getElementsByTagName('ul').length){
			this.getElementsByTagName('ul')[0].classList.add('active');
		}
		}
	
	})
}
function removeClass(el){
	var sibling = el.parentNode.children;
		for(var i = 0; i < sibling.length; i++){
			console.log(i+ "  ");
			if(sibling[i].classList.contains('active')){
				sibling[i].classList.remove('active');
				if(sibling[i].children.length){
					for(var j = 0; j< sibling[i].children.length; j++ ){
						removeClass(sibling[i].children[j]);
					}
					
				}
				
			}
		}
}