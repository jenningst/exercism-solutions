/**
 * Reverses a string.
 * @param {String} str A string to reverse
 * @return {String} The string, reveresed
 */

export const reverseString = (str = '') => {
    return [...str].reverse().join('');
};
