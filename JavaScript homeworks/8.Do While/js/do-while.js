var i = 0;
var j;
var x = 0;
var y = 1;
var z;
var t;

document.write(1 + "<br>")

do {
	i = i + 3;
	document.write(i + "<br>");
	j = i + 3;
}
while(j < 100);

document.write("<hr>");

document.write(x + "<br>");
document.write(y + "<br>");

do {       
	z = x + y;
	x = y;
	y = z;
	t = x + y;
	document.write(z + "<br>");         
}
while (t <= 1000);