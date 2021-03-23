import menuListTemplate from './template/template.hbs'
import menuList from './menu.json'

const menuRef = document.querySelector('.js-menu');
const darkThemeCheckBoxRef = document.getElementById('theme-switch-toggle');
const bodyRef = document.querySelector('body');

const markupTemplate = menuListTemplate(menuList);
menuRef.insertAdjacentHTML('beforeend', markupTemplate);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme;

bodyRef.classList.add(LIGHT);

let darkTheme = localStorage.getItem('darkTheme');

function changeClass (newClass, oldClass) {
  bodyRef.classList.remove(oldClass);
  bodyRef.classList.add(newClass);
}

const turnOnDarkTheme = () => {
  changeClass(DARK, LIGHT)
  localStorage.setItem('darkTheme', 'dark');
  darkThemeCheckBoxRef.setAttribute('checked', true)
}

const turnOffDarkTheme = () => {
   changeClass(LIGHT, DARK)
  localStorage.setItem('darkTheme', 'light');
}

if (darkTheme === 'dark') {
  turnOnDarkTheme();
}

darkThemeCheckBoxRef.addEventListener('change', onCheckBoxChange);

function onCheckBoxChange() {
    darkTheme = localStorage.getItem('darkTheme'); 
     if (darkTheme !== 'dark') {
       turnOnDarkTheme();
     } else {  
       turnOffDarkTheme(); }
}








   