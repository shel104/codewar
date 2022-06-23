function squareSum(numbers: number[]): number {
  return numbers.reduce((prev, curr) => prev + curr * curr, 0);
}
{
  console.log(squareSum([1, 2, 3, 4, 5]), 55); // 55
  console.log(squareSum([]), 0); // 5
  console.log(squareSum([0, 3, 4, 5]), 50); // 29
  console.log(squareSum([12]), 144); // 144
}
