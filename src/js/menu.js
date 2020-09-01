import menu from '../menu.json';
import menuItems from '../templates/menu-items.hbs';

const markup = menuItems(menu);

const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', markup);
