function SeriesSum(n: number): string {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += 1 / (1 + 3 * i);
  }
  return sum.toFixed(2);
}

console.log(SeriesSum(1));
console.log(SeriesSum(2));
console.log(SeriesSum(3));
console.log(SeriesSum(4));

(function () {
  (function () {
    SeriesSum(1), "1.00";
    SeriesSum(2), "1.25";
    SeriesSum(3), "1.39";
    SeriesSum(4), "1.49";
  });
});
