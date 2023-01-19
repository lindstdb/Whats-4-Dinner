// Get the 'card-section' div
/*const cardSection = document.querySelector(".card-section");

// Check if recipe info is stored in Local Storage
if (localStorage.getItem("recipeSource") && localStorage.getItem("recipeSourceUrl")) {

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
  
