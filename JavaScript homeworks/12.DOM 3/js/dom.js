(function(){

var colorList,
	i,
	uList,
	listEl;

colorList = [
	"#3B5998",
	"#CC181E",
	"#EC0F63",
	"#DAC40B",
	"#2A9E05"
]

uList = document.createElement("ul");

for(i = 0; i < colorList.length; i++){
	document.body.appendChild(uList);
	listEl = document.createElement("li");
	listEl.style.backgroundColor = colorList[i];
	listEl.setAttribute("class", "text-color")
	uList.appendChild(listEl);
	listEl.innerText = "list";
}

})();