setInterval(function () {


	function colorChange(value, index, arr) {
    var n = Math.random() * 10;
    //document.getElementById("square").innerHTML = n;
    if (n < 1) {
        value.style.backgroundColor = "#20B2AA";
    } else if (n > 1 && n < 2) {
        value.style.backgroundColor = "#ADD8E6";
    } else if (n > 2 && n < 3) {
        value.style.backgroundColor = "#00FA9A";
    } else if (n > 3 && n < 4) {
        value.style.backgroundColor = "#5F9EA0";
    } else if (n > 4 && n < 5) {
        value.style.backgroundColor = "blue";
    } else if (n > 5 && n < 6) {
        value.style.backgroundColor = "#7FFFD4";
    } else if (n > 6 && n < 7) {
        value.style.backgroundColor = "#7B68EE";
    }else{
        value.style.backgroundColor = "#00FFFF";
    }
}

    var myList = document.getElementsByClassName("square");
	var myArray = Array.prototype.slice.call(myList);
    myArray.forEach(colorChange);







}, 1000);
