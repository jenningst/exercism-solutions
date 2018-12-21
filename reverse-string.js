/* Reverses a string
*/

// INTERMEDIATE SOLUTION
export const reverseString = (str = '') => {
    return [...str].reverse().join('');
};
