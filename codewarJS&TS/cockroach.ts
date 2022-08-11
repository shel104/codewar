function cockroachSpeed(s: number): number {
  return Math.floor((s * 1000 * 100) / 60 / 60);
}
//how to solve
// 1. convert to seconds
// 2. divide by 60
// 3. divide by 60
// 4. convert to km/h
// 5. convert to m/s
console.log(cockroachSpeed(1.08));
console.log(cockroachSpeed(0.01));
console.log(cockroachSpeed(0.99));
console.log(cockroachSpeed(10));
console.log(cockroachSpeed(100));
console.log(cockroachSpeed(1000));
console.log(cockroachSpeed(10000));
console.log(cockroachSpeed(100000));
//language=TypeScript
