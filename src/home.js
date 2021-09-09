const homePage = (() => {

    const _contentDiv = document.querySelector('#content');
    const _navBar = document.createElement('div');
    const _contentContainer = document.createElement('div');

    const _createHeader = () => {
        _navBar.classList.add("nav-bar");
        _contentDiv.appendChild(_navBar);
    };

    const _createNavBtns = () => {
        const homeBtn = document.createElement('div');
        const menuBtn = document.createElement('div');
        const contactBtn = document.createElement('div');

        _navBar.appendChild(homeBtn);
        _navBar.appendChild(menuBtn);
        _navBar.appendChild(contactBtn);

        homeBtn.textContent = "Home";
        menuBtn.textContent = "Menu";
        contactBtn.textContent = "Contact";
    };

    const _createContentContainer = () => {
        _contentContainer.classList.add('content-container');
        _contentDiv.appendChild(_contentContainer);
    };

    const _createContent = () => {
        const contentChild = document.createElement('div');
        contentChild.classList.add('content-child');
        _contentContainer.appendChild(contentChild);

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
        _createHeader();
        _createNavBtns();
        _createContentContainer();
        _createContent();
    };

    return { createPage };
})();

export {homePage};