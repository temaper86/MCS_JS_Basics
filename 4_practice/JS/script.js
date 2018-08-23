request  = document.querySelector('.request');
popup   = document.querySelector('.popup'); 
closePopup   = document.querySelector('.closePopup'); 
openMenu   = document.querySelector('.openMenu'); 
menu   = document.querySelector('.menu'); 
closeMenu   = document.querySelector('.closeMenu'); 

request.onclick = () => {
	popup.style.display = 'flex';
}

closePopup.onclick = () => {
	popup.style.display = 'none';
}

openMenu.onclick = () => {
	menu.style.left = 0;
}

closeMenu.onclick = () => {
	menu.style.left = '-50vw';
}