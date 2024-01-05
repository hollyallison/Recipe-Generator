function displayRecipe(response) {
    console.log("Recipe generated");
    new Typewriter("#recipe", {
        strings: response.data.answer,
        autoStart: true,
        cursor: null,
        delay: 1,
    });
}


function generateRecipe(event) {
    event.preventDefault();
    let instructionsInput = document.querySelector('#user-instructions');
    let apiKey = "2c40a31a9bebb30oc02aftf7a42a8b2e";
    let prompt = `User instructions: Generate a ${instructionsInput.value} recipe`;
    let context = "You are an AI skilled in culinary arts. Generate a comprehensive recipe including ingredients, quantities, and detailed cooking instructions. Make sure to use the user instructions";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let recipeElement = document.querySelector("#recipe");
    recipeElement.classList.remove("hidden");
    recipeElement.innerHTML = `⏳Generating a ${instructionsInput.value} recipe for you`;
    axios.get(apiUrl).then(displayRecipe).catch(error => console.error('Error fetching recipe:', error));

    console.log("Generating recipe");
    console.log(`prompt: ${prompt}`);
    console.log(`context: ${context}`);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
