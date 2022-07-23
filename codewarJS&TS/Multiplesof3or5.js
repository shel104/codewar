function solution(number) {
  var sum = 0;

  for (var i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(solution(10));
console.log(solution(20));

// Test.describe("Basic tests", function() {
//   Test.assertEquals(solution(10), 23);
/*
function test(n, expected) {
  let actual = solution(n);
  it(`Expected ${expected}, got ${actual}`, () => {
    assert.strictEqual(actual, expected);
  });
}
describe("basic tests", function () {
  test(10, 23);
});
*/
