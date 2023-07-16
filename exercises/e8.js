import { data } from "../data/data";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

export function findPlanetNameByMoon(data, moonName) {
  // Your code goes here...
  // const moonToPlanet = data.planets.filter(function(planet) {
  //   return planet.moons;
  // }).map(function(planet) {
  //   return planet.name;
  // });

  // return moonToPlanet;

  // const planet = data.planets.find(function(planet) {
  //   return planet.moons.includes(moonName);
  // });

  // return moonToPlanet;

  // if(planet) {
  //   return planet.name;
  // } else {
  //   return null;
  // }

  // for (const planet of data.planets) {
  //   if (planet.moons.includes(moonName)) {
  //     return planet.name;
  //   }
  //   return null;
  // }

//   const planet = data.planets.find((planet) =>
//   planet.moons.some((moon) => moon.name === moonName)
// );

// return planet ? planet.name : null;

for (const planet of data.planets) {
  for (const moon of planet.moons) {
    if (moon.name.toLowerCase() === moonName.toLowerCase()) {
      return planet.name;
    }
  }
}
return null;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
