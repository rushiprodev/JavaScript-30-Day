Chunk Array in JavaScript
Problem:

Split an array into smaller arrays (chunks) of a given size.

Example: [1,2,3,4,5], size = 2 → [[1,2],[3,4],[5]]

Last chunk may have fewer elements if array length isn’t divisible by size.

If array is empty → return [].

1️⃣ Using Built-in Method slice()

slice(start, end) → returns part of an array from start to end-1.

function chunkArray(arr, size) {
    const result = [];            // to store all chunks
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size)); // create chunk and add to result
    }
    return result;
}

// Examples
console.log(chunkArray([1,2,3,4,5], 2)); // [[1,2],[3,4],[5]]
console.log(chunkArray([1,2,3], 1));     // [[1],[2],[3]]
console.log(chunkArray([], 1));          // []


Step-by-step:

Start from i = 0

Take a slice of size elements → [i, i+size)

Add slice to result

Repeat until end of array

2️⃣ Without Built-in Methods (Manual Way)
function chunkArrayManual(arr, size) {
    const result = []; // store all chunks
    let temp = [];     // temporary array for current chunk

    for (let i = 0; i < arr.length; i++) {
        temp.push(arr[i]);          // add element to temp
        if (temp.length === size) { // if temp reaches chunk size
            result.push(temp);      // push temp to result
            temp = [];              // reset temp for next chunk
        }
    }

    if (temp.length > 0) {          // push remaining elements
        result.push(temp);
    }

    return result;
}

// Examples
console.log(chunkArrayManual([1,2,3,4,5], 2)); // [[1,2],[3,4],[5]]


Step-by-step:

Start with empty temp = []

Add elements to temp one by one

When temp reaches size, push it to result and reset temp

At the end, push any remaining elements in temp

3️⃣ Edge Cases
Case	Input	Output
size = 1	[1,2,3], 1	[[1],[2],[3]]
size > array length	[1,2,3], 5	[[1,2,3]]
empty array	[], 1	[]
Lodash Library
What is Lodash?

Lodash is a JavaScript library that gives you ready-made functions to simplify coding.

Instead of writing long code, you can use Lodash functions.

Examples of Lodash functions:

Function	What it does	Example
_.chunk	Split array into chunks	_.chunk([1,2,3,4], 2) → [[1,2],[3,4]]
_.map	Transform array elements	_.map([1,2,3], x => x*2) → [2,4,6]
_.filter	Filter array	_.filter([1,2,3,4], x => x>2) → [3,4]
_.uniq	Remove duplicates	_.uniq([1,2,2,3]) → [1,2,3]

Note: Lodash is optional. Everything can also be done using plain JavaScript.

Using Lodash _.chunk

Syntax:

_.chunk(array, size)


array → the array to split

size → size of each chunk

Examples:

const _ = require('lodash'); // for Node.js

const arr = [1, 2, 3, 4, 5];

// Chunk size = 2
console.log(_.chunk(arr, 2)); // [[1,2],[3,4],[5]]

// Chunk size = 3
console.log(_.chunk(arr, 3)); // [[1,2,3],[4,5]]

// Chunk size = 1
console.log(_.chunk(arr, 1)); // [[1],[2],[3],[4],[5]]


How it works:

Start from the first element

Take size elements → put in a subarray

Repeat until end of array

Last chunk may have fewer elements

✅ Advantages of Lodash _.chunk:

Very simple → one line of code

Handles empty arrays automatically

Handles chunk size greater than array length

Visual Example (Optional for Notes)
Array: [1, 2, 3, 4, 5], size = 2

Chunks:
[1, 2]  → first chunk
[3, 4]  → second chunk
[5]     → last chunk (smaller)