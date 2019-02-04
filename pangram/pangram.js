/**
 * Determine if a sentence is a pangram.
 * @param {String} sentence sentence string to evaluate
 * @return {Boolean} return whether the sentence a pangram
 */

export const isPangram = (sentence) => {
  return [...'abcdefghijklmnopqrstuvwxyz'].every(char => 
    sentence.toLowerCase().split('').includes(char))
};