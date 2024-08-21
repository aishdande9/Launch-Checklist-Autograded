// Write your JavaScript code here!
window.addEventListener("load", function () {
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.\
      const Planet = pickPlanet(listedPlanets);
      addDestinationInfo(
        document,
        Planet.name,
        Planet.diameter,
        Planet.star,
        Planet.distance,
        Planet.moons,
        Planet.image
      );
    });
});

window.addEventListener("load", function () {
  let form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let pilotName = document.querySelector("input[name=pilotName]").value;
    let copilotName = document.querySelector("input[name=copilotName]").value;
    let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    let cargoMass = document.querySelector("input[name=cargoMass]").value;

    let list = document.getElementById("faultyItems");
    formSubmission(
      document,
      list,
      pilotName,
      copilotName,
      fuelLevel,
      cargoMass
    );
  });
});
