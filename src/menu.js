import {homePage} from './home';

const recipes = [];

class recipe{
    constructor(name, description){
        this.name = name;
        this.description = description;
    }
}

const tunaRecipe = new recipe('Spicy Tuna', 'Salad mix with seared tuna slices and spicy miso sauce');
recipes.push(tunaRecipe)
const salmonRecipe = new recipe('Butter Lemon Salmon', 'Salmon sashimi with butter lemon and soy sauce');
recipes.push(salmonRecipe)
//const salmonRecipe = new recipe('Butter Lemon Salmon', 'Salmon sashimi with butter lemon and soy sauce');

const menuPage = (() => {

    const createMenuContent = () => {

    }

    const createPage = () => {
        console.log(recipes);
        console.log(atumRecipe.name, atumRecipe.description);
        homePage.removeContent();
        //homePage.createHeader();
        //homePage.createContentContainer();
    };

    return {createPage}

})();

export {menuPage}