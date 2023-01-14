// Add event listener to button
document.getElementById("generate").addEventListener("click", fetchRandomRecipeAndWinePairingAndRedirect);

async function fetchRandomRecipeAndWinePairingAndRedirect() {
  const apiKey = "39d72333b5944dc0b8267b56d752f579";
  const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&includeWinePairing=true`;

  try {
    const response = await fetch(url);
    const recipeData = await response.json();
    const recipeTitle = recipeData.title;
    const recipeSourceURL = recipeData.sourceUrl;
    const recipeImage = recipeData.image;
    const wineName = recipeData.winePairing.pairedWines[0];
    const wineImage = recipeData.winePairing.pairingText;

    // Store the recipe and wine pairing data in session storage
    sessionStorage.setItem("recipeTitle", recipeTitle);
    sessionStorage.setItem("recipeSourceURL", recipeSourceURL);
    sessionStorage.setItem("recipeImage", recipeImage);
    sessionStorage.setItem("wineName", wineName);
    sessionStorage.setItem("wineImage", wineImage);

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
  const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&diet=ketogenic&maxWinePairing=1`;

  try {
    const response = await fetch(url);
    const recipeData = await response.json();
    const recipeTitle = recipeData.title;
    const recipeImage = recipeData.image;
    const recipeSourceUrl = recipeData.sourceUrl;
    const wineName = recipeData.winePairing.pairedWines[0];
    const wineImage = recipeData.winePairing.productMatches[0].imageUrl;

    // Store the recipe and wine data in session storage
    sessionStorage.setItem("recipeTitle", recipeTitle);
    sessionStorage.setItem("recipeImage", recipeImage);
    sessionStorage.setItem("recipeSourceUrl", recipeSourceUrl);
    sessionStorage.setItem("wineName", wineName);
    sessionStorage.setItem("wineImage", wineImage);

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
  const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&diet=kosher&maxWinePairing=1`;

  try {
    const response = await fetch(url);
    const recipeData = await response.json();
    const recipeTitle = recipeData.title;
    const recipeImage = recipeData.image;
    const recipeSourceUrl = recipeData.sourceUrl;
    const wineName = recipeData.winePairing.pairedWines[0];
    const wineImage = recipeData.winePairing.productMatches[0].imageUrl;

    // Store the recipe and wine data in session storage
    sessionStorage.setItem("recipeTitle", recipeTitle);
    sessionStorage.setItem("recipeImage", recipeImage);
    sessionStorage.setItem("recipeSourceUrl", recipeSourceUrl);
    sessionStorage.setItem("wineName", wineName);
    sessionStorage.setItem("wineImage", wineImage);

    // Redirect to TJindex.html
    window.location.href = "TJindex.html";
  } catch (err) {
    console.log(err);
  }
}

// Add event listener to button
document.getElementById("vegetarian").addEventListener("click", fetchRandomVegetarianRecipeAndRedirect);

async function fetchRandomVegetarianRecipeAndRedirect() {
  const apiKey = "39d72333b5944dc0b8267b56d752f579";
  const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&diet=vegetarian&maxWinePairing=1`;

  try {
    const response = await fetch(url);
    const recipeData = await response.json();
    const recipeTitle = recipeData.title;
    const recipeImage = recipeData.image;
    const recipeSourceUrl = recipeData.sourceUrl;
    const wineName = recipeData.winePairing.pairedWines[0];
    const wineImage = recipeData.winePairing.productMatches[0].imageUrl;

    // Store the recipe and wine data in session storage
    sessionStorage.setItem("recipeTitle", recipeTitle);
    sessionStorage.setItem("recipeImage", recipeImage);
    sessionStorage.setItem("recipeSourceUrl", recipeSourceUrl);
    sessionStorage.setItem("wineName", wineName);
    sessionStorage.setItem("wineImage", wineImage);

    // Redirect to TJindex.html
    window.location.href = "TJindex.html";
  } catch (err) {
    console.log(err);
  }
}
