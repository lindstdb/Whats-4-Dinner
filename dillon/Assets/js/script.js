const generateBtn = document.getElementById('generate');

generateBtn.addEventListener('click', () => {
    fetch("https://api.spoonacular.com/recipes/random/number=1?apiKey=39d72333b5944dc0b8267b56d752f579")
    .then(res => res.json())
    .then(res => {
        createRecipe(res.recipes[0]);
    })
    .cache(e => {
        console.log(e);
    });
});