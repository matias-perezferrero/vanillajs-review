console.log("script connected");

//This lets me access the element on the DOM
const botForm = document.getElementById("bot-form");

//The next part adds event listener that fires the createBot function when form is submitted. e.preventDefault is invoked because the default behavior of form elements is to refresh the page when they are submitted, and that is not desired in this case.
botForm.addEventListener("submit", e => {
  e.preventDefault();
  createBot();
});

function createBot() {
  //This selects the values of the input elements by their ID so that I can use them in the logic of the function
  let name = document.getElementById("name-input").value;
  let attack = document.getElementById("attack-input").value;
  let hp = document.getElementById("hp-input").value;

  //If any of the input fields are empty, do not build bot
  if (name === "" || attack === "" || hp === "") {
    alert(`couldn't build bot`);
  } else {
    console.log("hit element generation");
    //if all fields have information, create a new div element on the DOM, and target it in this JS file with the assigned name of div

    let div = document.createElement("div");
    //give the newly created div a class name
    div.className = "bot";

    //assign the inner contents of the new div using name, attack, and hp variables from above
    div.innerHTML = `<h2> ${name} </h2> 
    <p id="attack">Attack: ${attack}</p>
    <p id="hp">HP: ${hp}</p>
    <button id="delete-btn">Destroy Bot</button>`;

    //Add an onclick event to the delete button created above (that is coincidentally the last child of the div) that will fire removeBot function (removeBot function can be found below)
    div.lastChild.addEventListener("click", removeBot);

    //Select the bot-display section from the DOM
    let botDisplay = document.querySelector(".bot-display");

    //Add the bot div we just generated to the bot-display section
    botDisplay.appendChild(div);

    //After adding new bot, clear the input fields
    document.getElementById("name-input").value = "";
    document.getElementById("attack-input").value = "";
    document.getElementById("hp-input").value = "";
  }
}

function removeBot(e) {
  console.log("hit removeBot function");
  if (
    confirm(
      "Are you sure you want to obliterate your bot? This action can never be undone."
    )
  ) {
    //because the delete button
    e.target.parentElement.remove();
  }
}
