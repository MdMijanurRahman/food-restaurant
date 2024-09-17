// API URL
const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

// Toggle dropdown for mobile
function toggleDropdown() {
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('hidden');
}

// Fetch data from TheMealDB API
async function fetchData(category) {
    try {
        const response = await fetch(API_URL + category);
        const data = await response.json();
        displayMeals(data.meals);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Display meals on the page
function displayMeals(meals) {
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = ''; // Clear previous data

    meals.forEach(meal => {
        const mealCard = `
            <div class="card bg-base-100 shadow-xl">
                <figure>
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="w-full h-48 object-cover">
                </figure>
                <div class="card-body">
                    <h2 class="card-title">${meal.strMeal}</h2>
                    <p>${meal.strInstructions.substring(0, 110)}...</p>
                </div>
            </div>
        `;
        mealContainer.innerHTML += mealCard;
    });
}

// Default fetch on page load
window.onload = () => {
    fetchData('Potato');
};
