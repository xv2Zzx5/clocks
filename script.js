let button = document.querySelector("button");
let clock = document.querySelector("#clock");
let interval;
let show = false;
function timer() {
	let time = new Date();
	let h = time.getHours().toString();
	if (h.length < 2) {
		h = "0" + h;
	}
	let m = time.getMinutes().toString();
	if (m.length < 2) {
		m = "0" + m;
	}
	let s = time.getSeconds().toString();
	if (s.length < 2) {
		s = "0" + s;
	}
	clock.innerHTML = h + ":" + m + ":" + s;
	document.body.style.background = "lightblue";
}


 function clocks() {
 	interval = setInterval(timer, 1000);
 }
 function stop() {
 	clearInterval(interval);
 	clock.innerHTML = "00:00:00";
 	document.body.style.background = "white";
 }
 function start() {
 	console.log("cl1ck3d")
 	show = !show;
 	timer() 
 	if (show == true) {
 		clocks();
 	}
 	else{
 		stop();
 	}
 }
button.onclick = function(e){
	e.preventDefault();
	start();
}

/*function print() {
	console.log("hello")
}
setTimeout(print, 10000);
		"""""""zaderwka pered deystv1em"'"""""""
*/


/*function print(){
	console.log("setInterval");
}
setInterval(print, 500);
 s promewytkom vremen1
 */