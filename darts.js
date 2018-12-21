/**
 * returns the earned points in a single toss of a Darts game.
 * @param {Number} x X coordinate of a throw.
 * @param {Number} y Y coordinate of a throw.
 * @return {Number} The score of a throw.
 */

// BASIC SOLUTION
export const solve = (x, y) => {

    // check for non-number values
    if (typeof x != 'number' || typeof y != 'number') {
        return null;
    }

    // distance formula equation; assumes origin (0, 0)
    const distanceFromOrigin = (x, y) => {
        return Math.sqrt(Math.pow((x + 0), 2) + Math.pow((y + 0), 2));
    }

    // scoring rubric
    const score = {
        inner: { radius: 1, points: 10 },
        middle: { radius: 5, points: 5 },
        outer: { radius: 10, points: 1 }       
    }

    // get the throw radius from the origin
    const thisThrow = distanceFromOrigin(x, y);

    // loop through each target to get the throw's score
    for (let target of Object.keys(score)) {
        if (thisThrow <= score[target].radius) {
            return score[target].points;
        }
    };

    // no score as fallback
    return 0;
}

// LOCAL TESTS
// console.log(dartThrow(15.3, 13.2)); // should return 0
// console.log(dartThrow(10, 0)); // should return 1
// console.log(dartThrow('WRONG', 10)); // should return null
// console.log(dartThrow(3, 3.7)); // should return 5
// console.log(dartThrow(0, 5)); // should return 5
// console.log(dartThrow(0, 0)); // should return 10
