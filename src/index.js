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

const turnOnDarkTheme = () => {
  bodyRef.classList.remove(LIGHT);
  bodyRef.classList.add(DARK);
  localStorage.setItem('darkTheme', 'dark');
  darkThemeCheckBoxRef.setAttribute('checked', true)
}

const turnOffDarkTheme = () => {
   bodyRef.classList.remove(DARK);
   bodyRef.classList.add(LIGHT);
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








   