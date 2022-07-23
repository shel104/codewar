// Sum Numbers
function sum(numbers) {
  "use strict";
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum([]), 0);
console.log(sum([1, 5.2, 4, 0, -1]), 9.2);

"test",
  () => {
    console.log(sum([1, 2, 3, 4, 5]), 15);
  },
  "Sum of a list of numbers";

console.log(sum([1, 2, 3, 4, 5]), 15);
console.log(sum([-2, 343]), 341);
console.log(sum([-2.5, 3.5, -4.5]), -2.5);
console.log(sum([0, 0, 0, 0, 0]), 0);
