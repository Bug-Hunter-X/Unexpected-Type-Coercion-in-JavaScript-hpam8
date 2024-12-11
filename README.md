# Unexpected Type Coercion in JavaScript

This repository demonstrates a common issue in JavaScript: unexpected type coercion.  The `bug.js` file contains code that showcases this issue. The `bugSolution.js` file provides a solution to mitigate this problem.

## Bug Description

The code adds a number and a string. JavaScript's loose typing system allows it to implicitly convert the number to a string before concatenation, leading to unexpected string output instead of numerical addition.

## Solution

The solution involves explicitly type checking or converting the input parameters to ensure they are numbers before the addition operation is performed.
