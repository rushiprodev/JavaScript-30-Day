// Plain JavaScript Solution (Manual / Without Lodash)


function chunkArray(arr, size) {
    const result = []; // store all chunks
    let temp = [];     // temporary array for current chunk

    for (let i = 0; i < arr.length; i++) {
        temp.push(arr[i]);          // add element to temp
        if (temp.length === size) { // if temp reaches chunk size
            result.push(temp);      // push temp to result
            temp = [];              // reset temp for next chunk
        }
    }

    // push remaining elements if any
    if (temp.length > 0) {
        result.push(temp);
    }

    return result;
}

// ✅ Examples
console.log(chunkArray([1,2,3,4,5], 2)); // [[1,2],[3,4],[5]]
console.log(chunkArray([1,2,3,4,5], 1)); // [[1],[2],[3],[4],[5]]
console.log(chunkArray([8,5,3,2,6], 6)); // [[8,5,3,2,6]]
console.log(chunkArray([], 1));          // []






//2) Using Built-in slice() Method

function chunkArraySlice(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

// ✅ Examples
console.log(chunkArraySlice([1,2,3,4,5], 2)); // [[1,2],[3,4],[5]]


//3)Using Lodash _.chunk

const _ = require('lodash'); // Node.js environment

const arr = [1,2,3,4,5];

console.log(_.chunk(arr, 2)); // [[1,2],[3,4],[5]]
console.log(_.chunk(arr, 3)); // [[1,2,3],[4,5]]
console.log(_.chunk(arr, 1)); // [[1],[2],[3],[4],[5]]
console.log(_.chunk([], 1));  // []
