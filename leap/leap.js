/* eslint-disable no-unused-vars */
/**
 * Given a year, return whether it is a leap year.
 * @param {Number} year The year to check if a leap year
 * @return {Boolean} Whether the year is a leap year
 */

export const isLeap = (year) => {
    return (year % 4 === 0 && year % 100 !== 0)
        || (year % 400 === 0)
};