import {homePage} from './home';

class recipe{
    constructor(name, description){
        this.name = name;
        this.description = description;
    }
}

// const tunaRecipe = new recipe('Spicy Tuna', 'Salad mix with seared tuna slices and spicy miso sauce');
// recipes.push(tunaRecipe)
// const salmonRecipe = new recipe('Butter Lemon Salmon', 'Salmon sashimi with butter lemon and soy sauce');
// recipes.push(salmonRecipe)
//const salmonRecipe = new recipe('Butter Lemon Salmon', 'Salmon sashimi with butter lemon and soy sauce');

const menuPage = (() => {

    const recipes = [];

    const tunaRecipe = new recipe('Spicy Tuna', 'Salad mix with seared tuna slices and spicy miso sauce');
    recipes.push(tunaRecipe)
    const salmonRecipe = new recipe('Butter Lemon Salmon', 'Salmon sashimi with butter lemon and soy sauce');
    recipes.push(salmonRecipe)

    const createMenuContent = () => {

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
        // homePage.removeContent();
        homePage.createHeader();
        homePage.createContentContainer();
        createMenuContent();
    };

    return {createPage}

})();

export {menuPage}