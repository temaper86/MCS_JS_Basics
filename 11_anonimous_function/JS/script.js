console.log('Yoa are at ' + window.location);

let myFunc = function(element, color = 'red') {
	element.style.backgroundColor = color;
}

const heading = document.querySelector('h1');
const par = document.querySelector('p');

myFunc(heading);
myFunc(par, 'blue');