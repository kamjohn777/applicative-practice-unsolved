import { data } from "../data/data";

// SPACE DATA EXERCISE 1
// Return an array of all Planets' names
// Return example: ['name1', 'name2', ... , 'nameN']

export function getPlanetNames(data) {
  // Your code goes here...
  // const { planets } = data;
  // let allNames = [];

// for (let i = 0; i < data.planets.length; i++) {
    //  allNames.push(planet.name);
    // const planet = data.planets[i];
    // allNames.push(data.planets[i].name)
    // if (planet.hasOwnProperty('name')) {
    //   allNames.push(planet.name[i]);
    // }
// }  
// return allNames;

return data.planets.map(function(planet) {
  return planet.name;
});
}

// data.planets.name
// so maybe loop through the data array and then target the planets key


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-1"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
