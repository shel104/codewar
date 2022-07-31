class Challenge {
  static solution(num: number): number {
    let total: number = 0;
    for (let i: number = 0; i < num; i++) {
      total += i % 5 == 0 || i % 3 == 0 ? i : 0;
    }
    return total;
  }
}
console.log("23: " + Challenge.solution(10));
console.log(Challenge.solution(20));
console.log(Challenge.solution(30));
console.log(Challenge.solution(40));
console.log(Challenge.solution(50));
console.log(Challenge.solution(60));
console.log(Challenge.solution(70));
