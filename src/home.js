const homePage = (() => {

    const contentDiv = document.querySelector('#content');
    const navBar = document.createElement('div');
    const contentContainer = document.createElement('div');

    const createHeader = () => {
        navBar.classList.add("nav-bar");
        contentDiv.appendChild(navBar);
    };

    const createNavBtns = () => {
        const homeBtn = document.createElement('div');
        const menuBtn = document.createElement('div');
        const contactBtn = document.createElement('div');

        homeBtn.classList.add('nav-btns');
        menuBtn.classList.add('nav-btns');
        contactBtn.classList.add('nav-btns');

        navBar.appendChild(homeBtn);
        navBar.appendChild(menuBtn);
        navBar.appendChild(contactBtn);

        homeBtn.textContent = "Home";
        menuBtn.textContent = "Menu";
        contactBtn.textContent = "Contact";
    };

    const createContentContainer = () => {
        contentContainer.classList.add('content-container');
        contentDiv.appendChild(contentContainer);
    };

    const _createContent = () => {
        const contentChild = document.createElement('div');
        contentChild.classList.add('content-child');
        contentContainer.appendChild(contentChild);

        const restaurantName = document.createElement('div');
        const restaurantAbout = document.createElement('div');

        restaurantName.classList.add('restaurant-name');
        restaurantAbout.classList.add('restaurant-about');

        const name = "Ijjiban Japanese Cuisine";
        const about = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."';

        restaurantName.textContent = name;
        restaurantAbout.textContent = about;

        contentChild.appendChild(restaurantName);
        contentChild.appendChild(restaurantAbout);

    };

    const createPage = () => {
        createHeader();
        createNavBtns();
        createContentContainer();
        createContent();
    };

    const removeContent = () => {
        while (contentDiv.firstChild) {
            contentDiv.removeChild(contentDiv.firstChild);
        };
    };

    return { createPage, removeContent, createHeader, createNavBtns, createContentContainer };
})();

export {homePage};