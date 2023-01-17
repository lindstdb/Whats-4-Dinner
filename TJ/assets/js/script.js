window.addEventListener("load", function(){
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(response => response.json())
    .then(data => {
        // Extract the cocktail data
        var cocktail = data.drinks[0];
        var cocktailName = cocktail.strDrink;
        var cocktailImage = cocktail.strDrinkThumb;
        var cocktailUrl = "https://www.thecocktaildb.com/drink.php?c=" + cocktail.idDrink;
        // Populate the drinkRecipe div with the cocktail data
        document.getElementById("card-populate2").innerHTML = "<h4>" + recipeTitle + "</h4><img src='" + recipeImage + "'><a href='" + recipeSourceUrl + "'>Go To Recipe</a>";
    });
});

// Get the recipe data from local storage
var recipeTitle = localStorage.getItem("recipeTitle");
var recipeImage = localStorage.getItem("recipeImage");
var recipeSourceUrl = localStorage.getItem("recipeSourceUrl");

// Populate the foodRecipe div with the recipe data
document.getElementById("card-populate").innerHTML = "<h4>" + recipeTitle + "</h4><img src='" + recipeImage + "'><a href='" + recipeSourceUrl + "'>Go To Recipe</a>";

function expandCard() {
    var checkbox = document.getElementById('expand');
    var a = document.getElementById('foodRecipe');
    var b = document.getElementById('drinkRecipe');
    if (checkbox.checked == true) {
        a.className = "expandCard";
        b.className = "hide";
    } else if (checkbox.checked == !true) {
        a.className = "card";
        b.className = "card";
    }
};

function expandCard2() {
    var checkbox2 = document.getElementById('expand2');
    var a = document.getElementById('foodRecipe');
    var b = document.getElementById('drinkRecipe');
    if (checkbox2.checked == true) {
        b.className = "expandCard";
        a.className = "hide";
    } else if (checkbox2.checked == !true) {
        b.className = "card";
        a.className = "card";
    }
};

function favoriteItem() {
    var favorite = document.getElementById('heart');
    if (favorite.checked == true) {
        console.log('success');
    } else if (favorite.checked == !true) {
        console.log('also success');
    }
};

function favoriteItem2() {
    var favorite2 = document.getElementById('heart2');
    if (favorite2.checked == true) {
        console.log('success');
    } else if (favorite2.checked == !true) {
        console.log('also success');
    }
};