(function(){

function canDrv() {
	var getAge,
		getElsByTag;

	getAge = prompt("Please enter how old are you:");
	getElsByTag = document.getElementsByTagName("p");

	console.log(getElsByTag);

	getAge >= 18
	?
		(getElsByTag[0].setAttribute("class", "green"),
		getElsByTag[0].innerText = "You can drive.")

	:
		(getElsByTag[0].setAttribute("class", "red"),
		getElsByTag[0].innerText = "You can't drive!");
}

canDrv();

})();