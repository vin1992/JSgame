var EventUtil = {
	getEle:function (id) {
		return document.getElementById(id);
	},
	addHandler:function (ele,type,handler) {
		if(ele.addEventListener) {
			ele.addEventListener(type,handler,false);
		}else if(ele.attachEvent) {
			ele.attachEvent(type,handler);
		}else {
			ele["on"+type] = handler;
		}
	},
	removeHandler:function (ele,type,handler) {
		if(ele.removeHandler) {
			ele.removeHandler(type,handler,false);
		}else if(ele.detachEvent) {
			ele.detachEvent(type,handler);
		}else {
			ele["on"+type] = null;
		}
	},
	getEvent:function (ev) {
		return ev?event:window.event;
	},
	getTarget:function (ev) {
		return ev.target || ev.srcElement;
	},
	preventDefault:function (ev) {
		if(ev.preventDefault) {
			ev.preventDefault();
		}else {
			ev.returnValue = false;
		}
	},
	stopPropagation:function (ev) {
		if(ev.stopPropagation) {
			ev.stopPropagation();
		}else {
			ev.cancelBubble = true;
		}
	},
	// 获取按键字符编码  键盘事件可用
	getCharCode:function (ev) {
		if(typeof ev.charCode === "number") {
			return ev.charCode;
		}else {
			return ev.keyCode;
		}
	}
}
