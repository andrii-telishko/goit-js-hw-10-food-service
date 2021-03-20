import menuListTemplate from './template/template.hbs'
import menuList from './menu.json'
console.log(menuList);

console.log(menuList[0].ingredients[0]);

console.log(menuListTemplate);

const menuRef = document.querySelector('.js-menu');



console.log(menuRef);

const markupList = menuListTemplate(menuList);
console.log(markupList);

menuRef.insertAdjacentHTML('beforeend', markupList);

