// Add event listener to button
document.getElementById("generate").addEventListener("click", fetchRandomRecipeAndRedirect);

async function fetchRandomRecipeAndRedirect() {
  const apiKey = "39d72333b5944dc0b8267b56d752f579";
  const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const recipeData = await response.json();
    const recipeTitle = recipeData.title;
    const recipeImage = recipeData.image;

    // Store the recipe data in session storage
    sessionStorage.setItem("recipeTitle", recipeTitle);
    sessionStorage.setItem("recipeImage", recipeImage);

    // Redirect to TJindex.html
    window.location.href = "TJindex.html";
  } catch (err) {
    console.log(err);
  }
}

// Add event listener to button
document.getElementById("keto").addEventListener("click", fetchRandomKetoRecipeAndRedirect);

async function fetchRandomKetoRecipeAndRedirect() {
  const apiKey = "39d72333b5944dc0b8267b56d752f579";
  const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&diet=ketogenic`;

  try {
    const response = await fetch(url);
    const recipeData = await response.json();
    const recipeTitle = recipeData.title;
    const recipeImage = recipeData.image;

    // Store the recipe data in session storage
    sessionStorage.setItem("recipeTitle", recipeTitle);
    sessionStorage.setItem("recipeImage", recipeImage);

    // Redirect to TJindex.html
    window.location.href = "TJindex.html";
  } catch (err) {
    console.log(err);
  }
}

// Add event listener to button
document.getElementById("kosher").addEventListener("click", fetchRandomKosherRecipeAndRedirect);

async function fetchRandomKosherRecipeAndRedirect() {
  const apiKey = "39d72333b5944dc0b8267b56d752f579";
  const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&diet=kosher`;

  try {
    const response = await fetch(url);
    const recipeData = await response.json();
    const recipeTitle = recipeData.title;
    const recipeImage = recipeData.image;

    // Store the recipe data in session storage
    sessionStorage.setItem("recipeTitle", recipeTitle);
    sessionStorage.setItem("recipeImage", recipeImage);

    // Redirect to TJindex.html
    window.location.href = "TJindex.html";
  } catch (err) {
    console.log(err);
  }
}
