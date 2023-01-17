// Get the 'card-section' div
const cardSection = document.querySelector(".card-section");

// Check if recipe info is stored in Local Storage
if (localStorage.getItem("recipeSource") && localStorage.getItem("recipeSourceUrl")) {
    // Create a new 'article' element with the class 'card'
    const newCard = document.createElement("article");
    newCard.classList.add("card");
    // Get the recipe source URL and title from Local Storage
    const recipeSourceUrl = localStorage.getItem("recipeSourceUrl");
    const recipeTitle = localStorage.getItem("recipeTitle");
    // Append the recipe source URL and title as child elements
    newCard.innerHTML = `<a href="${recipeSourceUrl}">${recipeTitle}</a>`;
    // Append the new card to the 'card-section' div
    cardSection.appendChild(newCard);
}