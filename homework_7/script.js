var framework = {
	append: function(target, whot){
		target.appendChild(whot);
	},
	prepend: function(target, whot){
		target.insertBefore(whot, target.firstChild)
	},
	replace: function(target, whot){
		target.parentNode.replaceChild(target, whot);
	},
	create: function(s){
		return document.createElement(s);
	},
	remove: function(target){
		target.remove();
	},
	event: function(target, event, func){
		if(typeof target.attachEvent == "function"){
			target.attachEvent('on' + event, func);
		}
		else{
			target.addEventListener(event, func);
		}
	},
	unevent: function(target, event, func){
		if(typeof target.attachEvent == "function"){
			target.detachEvent('on' + event, func);
		}
		else{
			target.removeEventListener(event, func);
		}
	},
	dispatch: function(target, et){
		var event = new Event(et);
		target.dispatchEvent(event);
	}
}


