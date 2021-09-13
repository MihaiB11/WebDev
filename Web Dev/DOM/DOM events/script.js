var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var done = document.getElementsByTagName("li");


button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

togglesDone();
buttonListElement()

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var button = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.appendChild(button);
	button.innerHTML = "Done";
	input.value = "";

	togglesDone();
	buttonListElement();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function togglesDone() {
	for (i=0; i < done.length; i++) {
		done[i].addEventListener("click", changeClass);
	}	
}

function changeClass(){
	this.classList.toggle('done');
}

function buttonListElement() {
	var button = document.querySelectorAll('li button');
	for( i=0; i<button.length; i++){
	button[i].addEventListener('click', deleteElement)
	}
}

function deleteElement() {
	for(var i=0; i<done.length; i++){
		this.parentNode.remove()
	}
}