import { data } from "../data/data";

// SPACE DATA EXERCISE 5
// Return an array with all Planets' names with a massValue greater or equal to a given number (1-7)
// Return example: ['name1', 'name2', ... , 'nameN']

export function getPlanetsWithMassValue(data, number) {
  // Your code goes here...
  // const planetMass = data.planets.filter(function(mass) {
  //   if (mass.massValue >= number) {
  //     return planetMass;
  //   }
  // });

  // const planetNames = data.planets.map(function(name) {
  //     return planets.name
  // });

  // return planetNames;

  // const planetMass = data.planets.filter(function(planet) {
  //   return planet.massValue >= number;
  // }).map(function(planet) {
  //   return planet.name
  // });

  // return planetMass;

  const planetNames = [];

  for (let i = 0; i < data.planets.length; i++) {
    const planet = data.planets[i];
    if (planet.massValue >= number) {
      planetNames.push(planet.name);
    }
  }

  return planetNames;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-5"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
