const form = document.forms[0];
let insert = document.querySelector('.total');

form.onsubmit = function(e) {
	e.preventDefault();
	//console.log(form.elements.quantility.value);
	//console.log(form.elements.price.value);
	//console.log(insert);
	insert.innerHTML = form.elements.quantility.value * form.elements.price.value;
}