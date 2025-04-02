let counter = 0;

function incrementCounter() {
  counter++;
  try {
    incrementCounter();
  } catch (err) {
    console.log(err, counter);
  }
}

/* run the console.log for see the output */
// incrementCounter();

// maximum is 8370

///////////////-----------------------------
/*Step One: write the recursive function.
 *
 * Here, we create a function that calculates
 * the factorial of a number, n. A factorial
 * is the product of all positive integers
 * less than or equal to the number, n.
 */
function factorial(n) {
  if (n === 0) return 1; // The base case, to stop recursion
  return n * factorial(n - 1); // The recursive call
}
// console.log(factorial(5));

/**
 * If we were to call the above with a number as
 * high as, say, 50,000, it would result in a stack
 * overflow.
 */

/////////------------------------------------>
// part 2

/*
 *Write a recursive function that completely flattens an array of nested arrays,
 *regardless of how deeply nested the arrays are.
 *Once your recursive function is complete, trampoline it.
 */

// first need same deep nested array
// create flattenArr function
// declare empty arr for output
// create flatten function inside flattenArr function
// iterate over the given array and check if the iterated array still has array inside it,
// if yes recursion and repeat the process
// otherwise push the item of iterated array into output array
// call the flatten function for recursion  until all all nested arrays are out
// return the output array

const deepNestedArr = [[[1, [2, [3, 4], 5]], [6, [[7, 8]], 9], [10]]];

function flattenArr(arr) {
  let output = [];

  function flatten(arr) {
    for (let item of arr) {
      if (Array.isArray(item)) {
        flatten(item);
      } else {
        output.push(item);
      }
    }
  }
  flatten(arr);
  return output;
}

/* run the console.log for see the output */
// console.log(flattenArr(deepNestedArr));

/////////////////////
////// 3rd part --->

/* 
Create a simple HTML element to hold text. Cache this HTML element into a JavaScript variable.
Write a function that takes a parameter n and adds a list of all prime numbers between one and n to your HTML element.
Once complete, use the alert() method to alert the user that the calculation is finished.
*/

//// check the prime number // formula comes from stack overFlow website
function findPrime(n) {
  for (i = 2; i <= n - 1; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(findPrime(11));
