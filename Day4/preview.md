# 2665. Counter II (Easy)

## Problem Statement
Write a function `createCounter`. It should accept an initial integer `init` and return an object with three functions:

1. **increment()**: Increases the current value by 1 and returns it.  
2. **decrement()**: Reduces the current value by 1 and returns it.  
3. **reset()**: Sets the current value to `init` and returns it.  

---

## Example 1
**Input:**  
```javascript
init = 5
calls = ["increment","reset","decrement"]

output:
[6,5,4]

Explantion
const counter = createCounter(5);
counter.increment(); // 6
counter.reset();     // 5
counter.decrement(); // 4

