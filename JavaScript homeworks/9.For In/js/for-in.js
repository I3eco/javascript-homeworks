var cat,
	p;

	cat = {
		breed: "Angorian",
		name: "Suzi",
		sex: "female",
		age: 8,
		eyeColor: "blue",
		hairColor: "black and beige"
	}

	for(p in cat) {

		if(p = "name") {
			document.write(p + ": " + cat[p] + "<br>");
			break;
		}
	}
	for(p in cat) {

		if(p = "age") {
			document.write(p + ": " + cat[p] + "<br>");
			break;
		}
	}

	// Не съм убеден, че това е правилното решение, но реално работи. Пробвах следния вариант:
	// 	for(p in cat) {

	// 	if(p = "name") {
	// 		document.write(p + ": " + cat[p] + "<br>");
	// 	}
	// 	else if(p = "age") {
	// 		document.write(p + ": " + cat[p] + "<br>");
	// 	}
	// }
	// Но ми изкарва единствено name шест пъти. Ако е възможно малко пояснение ще ви бъда благодарен.