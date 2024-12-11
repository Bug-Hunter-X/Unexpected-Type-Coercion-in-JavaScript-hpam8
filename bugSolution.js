```javascript
function myFunction(a, b) {
  // Explicit type checking
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Invalid input: Both parameters must be numbers";
  }
  return a + b; 
}

console.log(myFunction(5, "5")); // Output: Invalid input: Both parameters must be numbers
console.log(myFunction(5, 5)); // Output: 10
```