import { data } from "../data/data";

// SPACE DATA EXERCISE 10
// Return a given asteroid object of data
// Return example: { key1: value1, key2: value2, ... , keyN: valueN }

export function getAsteroidDataByName(data, asteroidName) {
  // Your code goes here...
  // const asteroidInfo = data.asteroids.map(function(asteroid) {
  //   return asteroid.name;
  // })

  // return asteroidInfo;

  // for (let i = 0; i < data.asteroids.length; i++) {
  //   const asteroid = data.asteroids[i];
  //   if (asteroid.name === asteroidName) {
  //     return asteroid;
  //   }
  // }
  // return null;

  return data.asteroids.find(function(asteroid) {
    return asteroid.name === asteroidName;
  });
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
