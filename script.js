var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function delLi(event) {
	if (event.target.className === "btn") {
		event.target.parentElement.remove();
	}
}

function crossOutLi(event) {
	if (event.target.tagName === "LI") {
		event.target.classList.toggle("done");
	}
}

ul.addEventListener("click", delLi,); 
ul.addEventListener("click", crossOutLi);


function inputLength() {
	return input.value.length;
};

function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button");
		btn.innerHTML = "X";
		btn.classList.add("btn");
		li.appendChild(btn);
		li.appendChild(document.createTextNode(input.value));
		input.value = "";
		ul.appendChild(li);
};

function addListAfterClick() { 
	if (inputLength() > 0) {
		createListElement();
	}
};

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
};

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);



