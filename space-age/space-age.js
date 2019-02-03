/**
 * Given an age in seconds, calculates an age on a given planet
 * @param {String} planet The planet name to use for calculating age
 * @param {Number} age The age, in seconds, of a person
 * @return {Number} The age of a person on the given planet
 */

export const age = (planet, seconds) => {
  // 1. create earth year constant
  const earthSeconds = 31557600;
  // 2. create object literal for obtaining planet divisors
  const planetDivisors = {
    'mercury': 0.2408467,
    'venus': 0.61519726,
    'earth': 1,
    'mars': 1.8808158,
    'jupiter': 11.862615,
    'saturn': 29.447498,
    'uranus': 84.016846,
    'neptune': 164.79132,
  };

  // 3. if planet exists, calculate the age in earth years
  return planetDivisors[planet]
    ? Math.round((seconds / earthSeconds / planetDivisors[planet]) * 100) / 100
    : `${planet} not a valid planet`;
};