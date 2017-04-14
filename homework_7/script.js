var framework = {
	append: function(target, whot){
		target.appendChild(whot);
	},
	prepend: function(target, whot){
		target.insertBefore(whot, target.firstChild)
	},
	replace: function(target, whot){
		var el1=target.cloneNode();
		var el2=whot.cloneNode();
		target.parentNode.insertBefore(el2,target);
		target.remove();
		whot.parentNode.insertBefore(el1,whot);
		whot.remove();
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
		// var event = new Event(et);
		var event = document.createEvent("Event");
		event.initEvent(et);
		target.dispatchEvent(event);
	}
}


