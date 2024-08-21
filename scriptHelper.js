//Write your helper functions here!

require("cross-fetch/polyfill");
// Function to add destination info to the HTML document
function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  image
) {
  const missionTarget = document.getElementById("missionTarget");
  missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${image}">
    `;
}

// Function to validate input
function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  }
  if (isNaN(testInput)) {
    return "Not a Number";
  }
  return "Is a Number";
}

function formSubmission(
  document,
  faultyItems,
  pilot,
  coPilot,
  fuelLevel,
  cargoMass
) {
  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStatus");
  let launchStatus = document.getElementById("launchStatus");
  let isReady = true;
  if (
    validateInput(pilot) === "Empty" ||
    validateInput(coPilot) === "Empty" ||
    validateInput(fuelLevel) === "Empty" ||
    validateInput(cargoMass) === "Empty"
  ) {
    alert("All fields are required!");
    isReady = false;
  }

  if (validateInput(pilot) === "Is a Number") {
    alert("pilot should be valid string");
    isReady = false;
  }
  if (validateInput(coPilot) === "Is a Number") {
    alert("copilot should be valid string");
    isReady = false;
  }

  if (validateInput(fuelLevel) === "Not a Number") {
    alert("Fuel level  should be valid number!");
    isReady = false;
  }

  if (validateInput(cargoMass) === "Not a Number") {
    alert("Cargo mass should be valid number!");
    isReady = false;
  }
  if (isReady) {
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${coPilot} is ready for launch`;
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
    launchStatus.style.color = "green";
    launchStatus.innerHTML = "Shuttle is Ready for Launch";
    faultyItems.style.visibility = "visible";

    if (fuelLevel < 10000) {
      fuelStatus.innerHTML = "Fuel level too low for launch";
      faultyItems.style.visibility = "visible";
      launchStatus.style.color = "red";
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    }
    if (cargoMass > 10000) {
      faultyItems.style.visibility = "visible";
      cargoStatus.innerHTML = "Cargo mass too heavy for launch";
      launchStatus.style.color = "red";
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    }
  }
}
async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  return planets[Math.floor(Math.random() * planets.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
