console.log('You are at ' + window.location);

//document.body.style['background-color'] = prompt('Какой будет фон у страницы?');

let page = document.querySelector('.page');
//page.style['color'] = prompt('Какой будет цвет текста на странице?');

let spanname =  document.querySelector('span.name');
//spanname.innerHTML = prompt('Как зовут человека, который вас вдохновляет?');

let image = document.querySelector('img');
//image.setAttribute('src', prompt('Введите адрес картинки'));

let shortBio =  document.querySelector('.shortBio');
//shortBio.innerHTML = prompt('Введите текст страницы');

shortBio.className += ' animated';

console.log(shortBio);
