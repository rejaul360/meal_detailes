const loadMeal = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeal(data.meals))
}
const displayMeal = meals => {
    const divContainer = document.getElementById('meal_container');
    divContainer.innerHTML = "";
    for (const meal of meals) {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
                <div class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button onclick = "loadMealDetailes(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetailesModal">
                Meal Detailes
              </button>
                </div>
            </div>
        `
        divContainer.appendChild(mealDiv);
        console.log(meal);
    }
}
const btnField = () => {
    const searchText = document.getElementById('input_field').value;
    // console.log(searchText);
    loadMeal(searchText)
}

const loadMealDetailes = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetailes(data.meals[0]))
}
const displayMealDetailes = meal => {
    document.getElementById('mealDetailesModalLabel').innerText = meal.strMeal;
    const mealDetailesBody = document.getElementById('mealDetailesModalbody');
    mealDetailesBody.innerHTML = `
    <img class="img-fluid" src="${meal.strMealThumb}" alt="">
    `
}

loadMeal('beef')