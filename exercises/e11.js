import { data } from "../data/data";

// SPACE DATA EXERCISE 11
// Return an array of Planets' names with less than 10 moons
// include planets with 0 moons
// Return example: ['name1', 'name2', ... , 'nameN']

export function lowMoonsPlanets(data) {
  // Your code goes here...
  // const lessThanTenMoons = data.planets.map(function(planet) {
  //   if (planet.moons.length < 10 || planet.moons.length === 0) {
  //     return planet.name;
  //   }
  // });
  // return lessThanTenMoons;

  // const lessThanTenMoons = data.planets.filter(function(planet) {
  //   return planet.moons.length < 10 || planet.moons.length === 0;
  // }).map(function(planet) {
  //   return planet.name;
  // });
  
  // return lessThanTenMoons;

  //  const lessThanTenMoons = data.planets.filter(function(planet) {
  //   return planet.moons && (planet.moons.length < 10 || planet.moons.length === 0);
  // }).map(function(planet) {
  //   return planet.name;
  // });

  // return lessThanTenMoons;

  // const lessThanTenMoons = data.planets.filter(function(planet) {
    // return planet.moons && (planet.moons.length < 10 || planet.moons.length === 0);
    // return planet.moons && (planet.moons.length < 10 || !planet.moons.length);
  // })[0].name;

  // return lessThanTenMoons;

  const lessThanTenMoons = data.planets.filter(function(planet) {
    return planet.moons ? planet.moons.length < 10 : true;
  }).map(function(planet) {
    return planet.name;
  });

  return lessThanTenMoons;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
