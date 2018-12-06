// BASIC SOLUTION
// const isLeap = (year) => {
//     if (year % 4 === 0) {
//         if (year % 100 === 0 && year % 400 !== 0) {
//             return false;
//         } else {
//             return true;
//         }
//     } else {
//         return false;
//     }
// };

// INTERMEDIATE SOLUTION (REFACTORED)
export const isLeap = (year) => {
    return (year % 4 === 0 && year % 100 !== 0)
        || (year % 4 === 0 && year % 100 === 0 && year % 400 === 0)
};

// LOCAL TESTS
console.log(isLeap(2015)); // should return false
console.log(isLeap(2016)); // should return true
console.log(isLeap(2100)); // should return false
console.log(isLeap(2000)); // should return true
console.log(isLeap(1800)); // should return false