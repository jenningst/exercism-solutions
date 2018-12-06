// BASIC SOLUTION
/* If the given name is "Alice", the result should be "One for Alice, one for me." 
*  If no name is given, the result should be "One for you, one for me."
*/
// const twoFer = (name) => {
//     switch (name) {
//         case undefined:
//             return 'One for you, one for me.'
//         case name.toLowerCase() == 'alice':
//             return 'One for Alice, one for me.'
//         default:
//             return `One for ${name.charAt(0).toUpperCase().concat(name.slice(1).toLowerCase())}, one for me.`
//     }
// }

// INTERMEDIATE SOLUTION
export const twoFer = (name) => {
    return `One for ${name || 'you'}, one for me.`
}

// LOCAL TESTS
// console.log(twoFer('')); // should return 'One for you, one for me.'
// console.log(twoFer()); // should return 'One for you, one for me.'
// console.log(twoFer('Bob')); // should return 'One for Troy, one for me.'
// console.log(twoFer('Pam')); // should return 'One for Sara, one for me.'
// console.log(twoFer('ALICE')); // should return 'One for Alice, one for me.'
// console.log(twoFer('Alice')); // should return 'One for Alice, one for me.'
// console.log(twoFer('alice')); // should return 'One for Alice, one for me.'