/**
 * Given a DNA strand, return its RNA complement (per RNA transcription).
 * @param {String} dna the DNA string to evaluate
 * @return {String} the RNA complement
 */

export const toRna = (dna = '') => {
    const basePairs = {
        "G": "C", "C": "G", "T": "A", "A": "U"
    };

    let strand = [];
    dna.split('').forEach(element => {
        if (Object.keys(basePairs).includes(element)) {
            strand.push(basePairs[element]);
        } else {
            throw('Invalid input DNA.');
        }
    })
    return strand.join('');
};
