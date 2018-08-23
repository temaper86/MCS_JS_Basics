console.log('Yoa are at ' + window.location);

//const cools = document.getElementsByClassName('cool');
//const cools = document.getElementsByTagName('cool');
const cools = document.querySelectorAll('.cool');

console.log(cools);

cools[0].innerHTML = "I am first";