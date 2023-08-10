// script.js

document.addEventListener('DOMContentLoaded', () => {
    const ingredientsInput = document.getElementById('ingredients');
    const recipesDiv = document.getElementById('recipes');
    const searchButton = document.getElementById('search');

    const getRecipes = () => {
        const ingredients = ingredientsInput.value.split(',');
        const apiKey = '0ba0d718f65c4735a9aca44964820aee';
        const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients.join(',')}&apiKey=${apiKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                recipesDiv.innerHTML = '';
                for (const recipe of data) {
                    recipesDiv.innerHTML += `
                    <div class="recipe">
                        <h3>${recipe.title}</h3>
                        <img src="${recipe.image}" alt="${recipe.title}">
                        ${recipe.sourceUrl ? `<a href="${recipe.sourceUrl}" target="_blank">View Recipe</a>` : ''}
                    </div>
                    `;
                }
            })
            .catch(error => {
                console.error('Error fetching recipes:', error);
            });
    };

    searchButton.addEventListener('click', getRecipes);
});
