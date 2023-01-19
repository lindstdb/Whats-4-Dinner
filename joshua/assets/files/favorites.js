// function forEachKey(callback) {
//   for (let i=0; i< localStorage.length; i++) {
//     callback(localStorage.key(i));
//   }
// }

// for (let i = 0; i<localStorage.getItem(localStorage.key(i)););


var recipeTitle = localStorage.getItem("recipeTitle");
var recipeSourceUrl = localStorage.getItem("recipeSourceUrl");

document.getElementById("favorites-list").innerHTML = "</h4> <a class='recipeUrl' href = '"+ recipeSourceUrl + "'> <h4 class='recipe'>" + recipeTitle + "</a>";

localStorage.setItem("recipeTitle", recipes[0].data.title);
localStorage.setItem("recipeSourceUrl", recipe.sourceUrl);
