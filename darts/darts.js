/**
 * Returns the earned points in a single toss of a Darts game.
 * @param {Number} x X coordinate of a throw.
 * @param {Number} y Y coordinate of a throw.
 * @return {Number} The score of a throw.
 */

export const solve = (x, y) => {
    // check for non-number values
    if (typeof x != 'number' || typeof y != 'number') {
        return null;
    }

    // distance formula equation; assumes origin (0, 0)
    const distanceFromOrigin = (x, y) => {
        return Math.sqrt(Math.pow((x + 0), 2) + Math.pow((y + 0), 2));
    };

    // scoring rubric
    const score = {
        inner: { radius: 1, points: 10 },
        middle: { radius: 5, points: 5 },
        outer: { radius: 10, points: 1 }       
    };

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
};
