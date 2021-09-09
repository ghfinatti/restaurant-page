const createHomePage = (() => {

    const contentDiv = document.querySelector('#content');
    const navBar = document.createElement('div');

    const createHeader = () => {
        navBar.classList.add("nav-bar");
        contentDiv.appendChild(navBar);
    };

    const createNavBtns = () => {
        const homeBtn = document.createElement('div');
        const menuBtn = document.createElement('div');
        const contactBtn = document.createElement('div');

        navBar.appendChild(homeBtn);
        navBar.appendChild(menuBtn);
        navBar.appendChild(contactBtn);

        homeBtn.textContent = "Home";
        menuBtn.textContent = "Menu";
        contactBtn.textContent = "Contact";
    };

    return { createHeader, createNavBtns };
})();

export {createHomePage};