console.log('Yoa are at ' + window.location);

function moduleSquare(num) {
	return Math.abs(num)/2;
}

console.log(moduleSquare(-3));
console.log(moduleSquare(3));

console.log(Math.floor(2.678));
console.log(Math.round(2.678));

console.log(Math.random());
console.log(Math.random()*5 + 5);

console.log(Math.floor(Math.random()*5 + 5));

function extent(num) { 
	return num**Math.floor(Math.random()*9 + 1);
}

console.log(extent(2));

