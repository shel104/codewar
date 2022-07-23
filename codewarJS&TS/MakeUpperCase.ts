function makeUpperCase(str: string): string {
  return str.toUpperCase();
}

//describe("makeUpperCase", function () {
//  it("should return a string", function () {
//    assert.equal(typeof makeUpperCase("abc"), "string");
//  });

console.log(makeUpperCase("hello"));
console.log(makeUpperCase("hello world"));
console.log(makeUpperCase("hello world !"));
console.log(makeUpperCase("heLlO wORLd !"));
console.log(makeUpperCase("1,2,3 hello world!"));
