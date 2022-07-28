const grow = (x) => x.reduce((a, b) => a * b);
// console.log(grow([1, 2, 3, 4, 5]), 120);
/*
  Reducebutgrow
*/
console.log(grow([1, 2, 3]), 6);
console.log(grow([4, 1, 1, 1, 4]), 16);
console.log(grow([2, 2, 2, 2, 2, 2]), 64);
console.log(grow([1, 2, 3, 4, 5]), 120);
