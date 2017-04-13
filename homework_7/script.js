var framework = {
	append: function(target, whot){
		target.appendChild(whot);
	},
	prepend: function(target, whot){
		target.insertBefore(whot, target.firstChild)
	},
	replace(target, whot){
		target.parentNode.replaceChild(target, whot);
	},
	create(s){
		return document.createElement(s);
	},
	remove(target){
		target.remove();
	},
	event(target, event, func){
		if(typeof target.attachEvent == "function"){
			target.attachEvent('on' + event, func);
		}
		else{
			target.addEventListener(event, func);
		}
	},
	unevent(target, event, func){
		if(typeof target.attachEvent == "function"){
			target.detachEvent('on' + event, func);
		}
		else{
			target.removeEventListener(event, func);
		}
	},
	dispatch(target, et){
		var event = new Event(et);
		target.dispatchEvent(event);
	}
}


