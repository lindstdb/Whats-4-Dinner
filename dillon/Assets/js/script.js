document.getElementById("generate").addEventListener("click", function(){
    // Make the API call
    fetch("https://api.spoonacular.com/recipes/random?apiKey=39d72333b5944dc0b8267b56d752f579&number=1&tags=dinner")
    .then(response => response.json())
    .then(data => {
        var recipe = data.recipes[0];
        // Save the recipe data to local storage
        localStorage.setItem("recipeTitle", recipe.title);
        localStorage.setItem("recipeImage", recipe.image);
        localStorage.setItem("recipeSourceUrl", recipe.sourceUrl);
        // Redirect to TJindex.html
        window.location.href = "TJindex.html";
    });
});

document.getElementById("vegetarian").addEventListener("click", function(){
    // Make the API call
    fetch("https://api.spoonacular.com/recipes/random?apiKey=39d72333b5944dc0b8267b56d752f579&number=1&tags=vegetarian&tags=dinner")
    .then(response => response.json())
    .then(data => {
        var recipe = data.recipes[0];
        // Save the recipe data to local storage
        localStorage.setItem("recipeTitle", recipe.title);
        localStorage.setItem("recipeImage", recipe.image);
        localStorage.setItem("recipeSourceUrl", recipe.sourceUrl);
        // Redirect to TJindex.html
        window.location.href = "TJindex.html";
    });
});

document.getElementById("keto").addEventListener("click", function(){
    // Make the API call
    fetch("https://api.spoonacular.com/recipes/random?apiKey=39d72333b5944dc0b8267b56d752f579&number=1&tags=ketogenic&tags=dinner")
    .then(response => response.json())
    .then(data => {
        var recipe = data.recipes[0];
        // Save the recipe data to local storage
        localStorage.setItem("recipeTitle", recipe.title);
        localStorage.setItem("recipeImage", recipe.image);
        localStorage.setItem("recipeSourceUrl", recipe.sourceUrl);
        // Redirect to TJindex.html
        window.location.href = "TJindex.html";
    });
});

document.getElementById("vegan").addEventListener("click", function(){
    // Make the API call
    fetch("https://api.spoonacular.com/recipes/random?apiKey=39d72333b5944dc0b8267b56d752f579&number=1&tags=vegan&tags=dinner")
    .then(response => response.json())
    .then(data => {
        var recipe = data.recipes[0];
        // Save the recipe data to local storage
        localStorage.setItem("recipeTitle", recipe.title);
        localStorage.setItem("recipeImage", recipe.image);
        localStorage.setItem("recipeSourceUrl", recipe.sourceUrl);
        // Redirect to TJindex.html
        window.location.href = "TJindex.html";
    });
});

$("#btn-main").on("click", function(){
    $.ajax({
        url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
        method: "GET",
        success: function(data) {
            var drink = data.drinks[0];
            var drinkName = drink.strDrink;
            var drinkImg = drink.strDrinkThumb;
            var drinkUrl = drink.strSource;
            // Populate the drinkRecipe div with the drink data
            $("#drinkRecipe").html("<h2>" + drinkName + "</h2><img src='" + drinkImg + "'><a href='" + drinkUrl + "'>Recipe</a>");
        }
    });
});







