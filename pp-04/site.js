//  1. Correct the variable scope so that the console.log call
//  outputs the correct value for x (5) even after double(6) is
//  called:

// var x = 5;

// function double(num) {
//  var x = num * 2;
//  return x;
// }

// double(6);
// console.log('The value of x is:', x, 'It should be 5.');

//  2. Rewrite the corrected JavaScript above as a self-executing
//  anonymous function that does not pollute the global
//  namespace (e.g., neither its variables nor the double
//  function can be accessed via the `window` global object,
//  like `window.x`):

(function(){
  var x = 5;
  var double = multiplier(2);

  console.log(double(6));
  console.log('The value of x is:', x, 'It should be 5.');

  function multiplier(factor) {
    return function(num) {
      return num * factor;
    };
  }
})();

//  3. Correct this function so that there is no i variable in
//  the global scope:

function arrayEach(array, func) {
  var i = 0;
  for (i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

arrayEach(['red', 'green', 'blue'], console.log);

console.log(window.i); // should be 'undefined', not 3

//  4. Explain why this function does not modify the global
//  variable x declared on line 5 above. Write your explanation
//  as JavaScript comments.

// Answer:
// This function will not modify the global variable x declared on line 5 above
// because it is not within the scope of the older function. Therefore,
// if this newer function wanted to modify the already declared function above
// then the newer function must be withinin the scope of the older function or the
// newer function must have its own memory allocation for the global variable x.


function addTwo(x) {
  x = x + 2;
  return x;
}

console.log(addTwo(4)); // 6
console.log(x); // should be 5 if you corrected the double() function above
