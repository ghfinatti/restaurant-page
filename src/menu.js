import {homePage} from './home';

class recipe{
    constructor(name, description){
        this.name = name;
        this.description = description;
    };
};

const menuPage = (() => {

    const recipes = [];

    const tunaRecipe = new recipe('Spicy Tuna', 'Salad mix with seared tuna slices and spicy miso sauce');
    recipes.push(tunaRecipe);
    const salmonRecipe = new recipe('Butter Lemon Salmon', 'Salmon sashimi with butter lemon and soy sauce');
    recipes.push(salmonRecipe);
    const salmonSushi = new recipe('Salmon Sushi', 'Salmon Sushi topped with caviar');
    recipes.push(salmonSushi);
    const tunaSushi = new recipe('Tuna Sushi', 'Tuna sushi topped with foie gras');
    recipes.push(tunaSushi);

    const createContent = () => {

        const contentChild = document.querySelector('.content-child');

        for (let i = 0; i <= recipes.length; i++){
            const recipeNameDiv = document.createElement('div');
            const recipeDescriptionDiv = document.createElement('div');

            recipeNameDiv.classList.add('recipe-name');
            recipeDescriptionDiv.classList.add('recipe-description');

            recipeNameDiv.textContent = `${recipes[i].name}`;
            recipeDescriptionDiv.textContent = `${recipes[i].description}`;

            contentChild.appendChild(recipeNameDiv);
            contentChild.appendChild(recipeDescriptionDiv);
        };
    };

    const createPage = () => {
        homePage.createHeader();
        homePage.createContentContainer();
        createContent();
    };

    return { createPage }

})();

export { menuPage }