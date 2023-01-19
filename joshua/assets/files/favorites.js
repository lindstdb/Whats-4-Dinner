<<<<<<< HEAD
// function forEachKey(callback) {
//   for (let i=0; i< localStorage.length; i++) {
//     callback(localStorage.key(i));
//   }
// }
=======
// Get the 'card-section' div
/*const cardSection = document.querySelector(".card-section");
>>>>>>> 34e066c06b3ebccc98fc92a0c739283cfa4c7eec

// for (let i = 0; i<localStorage.getItem(localStorage.key(i)););

<<<<<<< HEAD

var recipeTitle = localStorage.getItem("recipeTitle");
var recipeSourceUrl = localStorage.getItem("recipeSourceUrl");

document.getElementById("favorites-list").innerHTML = "</h4> <a class='recipeUrl' href = '"+ recipeSourceUrl + "'> <h4 class='recipe'>" + recipeTitle + "</a>";

localStorage.setItem("recipeTitle", recipes[0].data.title);
localStorage.setItem("recipeSourceUrl", recipe.sourceUrl);
=======
    // Get the recipe source URL and title from Local Storage
    const recipeSourceUrl = localStorage.getItem("recipeSourceUrl");
    const recipeTitle = localStorage.getItem("recipeTitle");
   // Get the 'card-section' div on 'favorites.html'
   const cardSection = document.querySelector(".card-section");
   // Get existing articles in the 'card-section' div
   const existingArticles = cardSection.querySelectorAll("article");
   // Iterate through existing articles
   existingArticles.forEach(function(article) {
       // Assign the recipe source URL and title to the article
       article.innerHTML = `<a href="${recipeSourceUrl}">${recipeTitle}</a>`;
});
}*/

function forEachKey(callback) {
    for (let i = 0; i < localStorage.length; i++) {
      callback(localStorage.key(i));
    }
  }

  for (let i = 0; i < localStorage.length; i++) {
    console.log(localStorage.getItem(localStorage.key(i)));
  }
  
>>>>>>> 34e066c06b3ebccc98fc92a0c739283cfa4c7eec
