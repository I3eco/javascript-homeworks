(function(){

function showMyAge(currentYear, yearOfBirth) {
	var result = currentYear - yearOfBirth;
	return "My age is: " + result;
}

function cat(catName, catAge) {
	return "My cat name is: " + catName + " , and my cat age is: " + catAge;
}

function myFavMovie(favMov) {
	return "My favourite movie is: " + favMov;
}

var getElId1 = document.getElementById("virtual-btn1");

getElId1.addEventListener ("click", function(){
	alert(showMyAge(2016, 1986));
});

var getElId2 = document.getElementById("virtual-btn2");

getElId2.addEventListener ("dblclick", function(){
	alert(cat("Tom", 8));
});

var getElId3 = document.getElementById("virtual-btn3");

getElId3.addEventListener ("wheel", function(){
	alert(myFavMovie("Enemy At The Gates"));
});

})();