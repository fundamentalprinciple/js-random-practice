/*function findMaxNumber(arr) {
    let max = arr[0];

    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }

    return max; 
}
*/

function findMaxNumber(l) {
    return Math.max(...l)
}

let l = [1,2,3,4,5,6,5,4,3,2,1];

console.log(findMaxNumber(l));
