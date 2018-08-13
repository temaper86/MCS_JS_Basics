console.log('Yoa are at ' + window.location);

const byTag = document.getElementsByTagName('div');
const byClass = document.getElementsByClassName('myClass');
const byId = document.getElementById('myId');

console.log(byTag, byClass, byId);

const allBySelector = document.querySelectorAll('.coolClass.mine');
const firstBySelectotr = document.querySelector('.coolClass.mine');

console.log(allBySelector, firstBySelectotr);

const quest = prompt('Что хотите написать на странице ?');

byId.innerHTML = quest;
firstBySelectotr.innerHTML = "<h2>Hello I am first with selector div</h2>";