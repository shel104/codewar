function countSheeps(arrayOfSheeps: (boolean | undefined | null)[]) {
  return arrayOfSheeps.filter(Boolean).length;
}

var array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];
import { expect } from "chai";

//     console.log("countSheeps", function () {
//   {
//     const result1 = countSheeps(array1);
//     expect(result1).to.equal(
//       17,
//       "There are 17 sheeps in total, not " + result1
//     );
//   }
// });

console.log("result1");

describe("countSheeps", function () {
  it("should work correctly", () => {
    const result1 = countSheeps(array1);
    expect(result1).to.equal(
      17,
      "There are 17 sheeps in total, not " + result1
    );
  });
});
