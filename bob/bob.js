/* eslint-disable no-unused-vars */
/**
 * Given a message string, return a response from an actor Bob.
 * @param {String} message A message to Bob
 * @return {String} A response from Bob
 */

export const hey = (message) => {
  const messageToParse = message.trim();
  // get a letters-only array for case-matching
  const charsOnly = messageToParse.match(/[A-Za-z]/g);

  // helper function for checking case of characters
  function isUppercase(character) {
    return /[A-Z]/.test(character);
  }

  if (messageToParse === '') {
    // blank message
    return 'Fine. Be that way!';
  } else if(charsOnly && charsOnly.every(isUppercase)) {
    // exclamation
    if (/\?/.test(messageToParse)) {
      // exclaimed question
      return 'Calm down, I know what I\'m doing!';
    } else {
      // regular exclamation
      return 'Whoa, chill out!';
    }
  } else if (messageToParse.charAt(messageToParse.length - 1) === '?') {
    // regular question
    return 'Sure.';
  }
  // default response
  return 'Whatever.';
};