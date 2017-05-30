var myVar = setInterval(colorChange, 10);
var size = 100;
var grow = 1; //1 means that square gets bigger
function colorChange(){
	var n = Math.random() * 10;
	//document.getElementById("square").innerHTML = n;
	if(n < 1){
		document.getElementById("square").style.backgroundColor = "#20B2AA";
	}else if(n > 1 && n < 2){
		document.getElementById("square").style.backgroundColor = "#ADD8E6";
	}else if (n > 2 && n < 3){
		document.getElementById("square").style.backgroundColor = "#00FA9A";
	}else if (n > 3 && n < 4){
		document.getElementById("square").style.backgroundColor = "#5F9EA0";
	}else if (n > 4 && n < 5){
		document.getElementById("square").style.backgroundColor = "blue";
	}else if (n > 5 && n < 6){
		document.getElementById("square").style.backgroundColor = "#7FFFD4";
	}else if (n > 6 && n < 7){
		document.getElementById("square").style.backgroundColor = "#7B68EE";
	}else if (n > 7 && n < 8){
		document.getElementById("square").style.backgroundColor = "#00FFFF";
	}else{
		document.getElementById("square").style.backgroundColor = "white";
		
		if(size > 400){
			grow = 0;
		}else if(size< 100){
			grow = 1;
		}
		if(grow == 1){
			size = size+10;
		}else{
			size = size-10;
		}
		var sizeString = size.toString();
		var sizeStringPx = sizeString.concat("px");
		document.getElementById("square").style.height = sizeStringPx;
		document.getElementById("square").style.width = sizeStringPx;
	}
}
