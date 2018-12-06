/* Given a DNA strand, its transcribed RNA strand is 
*  formed by replacing each nucleotide with its 
*  complement.
*/

// BASIC SOLUTION
// export const toRna = (dna='') => {
//     let dnaStrand = dna.split('');
//     let rnaStrand = [];

//     // our base pairs for matching
//     const basePairs = {
//         "G": "C", "C": "G", "T": "A", "A": "U"
//     };

//     dnaStrand.forEach((strand) => {
//         rnaStrand.push(basePairs[strand]);
//     });

//     return rnaStrand.join(''); 
// };

// INTERMEDIATE SOLUTION
export const toRna = (dna = '') => {
    const basePairs = {
        "G": "C", "C": "G", "T": "A", "A": "U"
    };

    return dna.split('').map((strand) => basePairs[strand]).join('')
};


// LOCAL TESTS
// console.log(toRna()); // should return ''
// console.log(toRna('A')); // should return 'U'
// console.log(toRna('ACGTGGTCTTAA')); // should return 'UGCACCAGAAUU'
