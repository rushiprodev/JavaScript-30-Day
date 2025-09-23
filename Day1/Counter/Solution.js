


var createCounter = function(n) {
    let current = n;
    return function() {
        return current++;
    }
};

// Example usage:
const counter = createCounter(10);
console.log(counter()); // 10 (first call)
console.log(counter()); // 11 (second call)
console.log(counter()); // 12 (third call)
