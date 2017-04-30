var framework = {
	append: function(target, whot){
		target.appendChild(whot);
	},
	prepend: function(target, whot){
		target.insertBefore(whot, target.firstChild)
	},
	replace: function(target, whot){
		 target.parentNode.replaceChild(target, whot)

		// var el1=target.cloneNode();
		// var el2=whot.cloneNode();
		// target.parentNode.insertBefore(el2,target);
		// target.remove();
		// whot.parentNode.insertBefore(el1,whot);
		// whot.remove();
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
	dispatch: function(target, ev){
		// var event = new Event(ev);
		var event = document.createEvent("Event");
		event.initEvent(ev);
		target.dispatchEvent(event);
	},
	Get: {
		byId: function(s){
			return document.getElementById(s);
		},
		bySelector: function(s){
			return document.querySelector(s);
		},
		bySelectorAll: function(s){
			return document.querySelectorAll(s);
		},
		byClass: function(s){
			return document.getElementsByClassName(s);
		},
		byTag: function(s){
			return document.getElementsByTagName(s);
		}

	},
	width: function(e){
		return e.clientWidth;
	},
	height: function(e){
		return e.clientHeight;
	},
	pageTop: function(e){
		var offset = 0;
		while(e.offsetParent!= null){
			offset = e.offsetTop;
			e = e.offsetParent;
		}
		return offset;
	},
	pageLeft: function(e){
		var offset = 0;
		while(e.offsetParent!= null){
			offset = e.offsetLeft;
			e = e.offsetParent;
		}
		return offset;
	},
	css: function(e, property, value){
		if(arguments.length == 2){
			var style = window.getComputedStyle(e);
			return style[property];
		}
		if(arguments.length == 3){
			e.style[property] = value;
		}
	}
	,
	ajax: function(m, p, f){
		var xhr = new XMLHttpRequest();
		xhr.onload = f;
		xhr.open(m, p, true); 
		xhr.send();
	}
}


