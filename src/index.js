import {homePage} from './home';
import {menuPage} from './menu';

homePage.createPage();

const navBtns = document.querySelectorAll('.nav-btns');

navBtns.forEach(btn => btn.addEventListener('click', () => {
    if (btn.textContent == 'Menu'){
        menuPage.createPage();
    }
}))