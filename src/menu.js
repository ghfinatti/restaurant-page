import {homePage} from './home';

const menuPage = (() => {

    const createPage = () => {

        homePage.removeContent();
        homePage.createHeader();
        homePage.createNavBtns();
        homePage.createContentContainer();
    };

    return {createPage}

})();

export {menuPage}