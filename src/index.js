import {homePage} from './home';
import {menuPage} from './menu';

homePage.createPage();

const navBtns = document.querySelectorAll('.nav-btns');

navBtns.forEach(btn => btn.addEventListener('click', () => {
    if (btn.textContent == 'Menu'){
        homePage.removeContent();
        menuPage.createPage();
    };
    if (btn.textContent == 'Home'){
        homePage.removeContent();
        homePage.createHeader();
        homePage.createContentContainer();
        homePage.createContent();
    };
}));