# API

## Fetch Data

```javascript
const loadMeals = (searchText) => {
  const url = `https://...?s=${searchText}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};
```

## Working with Data

```javascript
const displayMeals = (meals) => {
  // console.log(meals);
  // step 1: container element
  const mealsContainer = document.getElementById("meals-container");
  mealsContainer.innerText = "";
  meals.forEach((meal) => {
    console.log(meal);
    // step 2: create child for each element
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("col");
    // step-3 set content of the child
    mealDiv.innerHTML = `
        <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top">
        </div>`;
    // step-4: appendChild
    mealsContainer.appendChild(mealDiv);
  });
};
```
