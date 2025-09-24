# 2634. Filter Elements from Array

## Problem
Given an integer array `arr` and a filtering function `fn`, return a filtered array `filteredArr`.

The `fn` function takes one or two arguments:

- `arr[i]` - number from the arr  
- `i` - index of `arr[i]`

`filteredArr` should only contain the elements from the arr for which the expression `fn(arr[i], i)` evaluates to a truthy value.  
A truthy value is a value where `Boolean(value)` returns true.

⚠️ You must solve it **without the built-in `Array.filter` method**.

---

## Examples

**Example 1**
Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
Output: [20,30]

Explanation: Filters out values that are not greater than 10.

---

**Example 2**
Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
Output: [1]

Explanation: Only keeps the first index.

---

