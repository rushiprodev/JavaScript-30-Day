# 2704. To Be Or Not To Be (Easy)

## Problem Statement
Write a function `expect` that helps developers test their code. It should take in any value `val` and return an object with the following two functions:

1. **toBe(val)**:  
   Accepts another value and returns `true` if the two values `===` each other. If they are not equal, it should throw an error `"Not Equal"`.

2. **notToBe(val)**:  
   Accepts another value and returns `true` if the two values `!==` each other. If they are equal, it should throw an error `"Equal"`.

---

## Example 1
**Input:**  
```javascript
func = () => expect(5).toBe(5)


Output:
{"value": true}
Explanation:
5 === 5, so this expression returns true.


Example 2

Input:

func = () => expect(5).toBe(null)

Output:

{"error": "Not Equal"}


Explanation:
5 !== null, so this expression throws the error "Not Equal".