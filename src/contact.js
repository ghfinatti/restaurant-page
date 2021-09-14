import {homePage} from './home';

const contactPage = (() => {

    const createContent = (title, text) => {

        const contentChild = document.querySelector('.content-child');

        const titleDiv = document.createElement('div');
        const textDiv = document.createElement('div');

        titleDiv.classList.add('contact-title');
        textDiv.classList.add('contact-text');

        titleDiv.textContent = title;
        textDiv.textContent = text;

        contentChild.appendChild(titleDiv);
        contentChild.appendChild(textDiv);
    };

    const createPage = () => {
        homePage.createHeader();
        homePage.createContentContainer();
        createContent('Reservations', 'Phone-number: +XX (XX) XXXXX-XXXX');
        createContent('Working Hours', 'Open 17pm - 23pm');
        createContent('Address', '105 Steele St, Denver');
    };

    return { createPage }

})();

export { contactPage }