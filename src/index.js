function generateRecipe(event) {
    event.preventDefault();

  

    new Typewriter("#recipe", {
        strings: "The recipe will go here",
        autoStart: true,
        cursor: null,
        delay: 1,
      });

}


let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);