for(var t = 0; t <= 100; t++) {
	if(t % 2 == 0){
		document.write(t + " - even" + "<br>")
	}
	else {
		document.write(t + " - odd" + "<br>")
	}
}

document.write("<br>" + "<hr>" + "<br>");

for(var x = 1; x <= 5; x++) {
	for(var y = 0; y < x; y++) {
		document.write("*");
	}
	document.write("<br>");
}