var num1 = 5,
	num2 = 7;

// switch(num1 > num2) {
// 	case true:
// 		document.write(num1 + " is bigger than " + num2 + "<br>");
// 		break;
// 	case false:
// 		document.write(num1 + " is smaller than " + num2 + "<br>");
// 		break;
// 	default:
// 		document.write("Cannot compare");
// } - не работи за равенство

switch(true) {
	case num1 - num2 > 0:
		document.write(num1 + " is bigger than " + num2 + "<br>");
		break;
	case num1 - num2 < 0:
		document.write(num1 + " is smaller than " + num2 + "<br>");
		break;
	case num1 - num2 == 0:
		document.write(num1 + " is equal to " + num2 + "<br>");
		break;
	default:
		document.write("Cannot compare");
}
