export class G964 {
  public static digPow = (n: number, p: number): number => {
    const sum = `${n}`
      .split("")
      .map((char) => parseInt(char))
      .reduce((sum, int, index) => sum + Math.pow(int, p + index), 0);
    const result = sum / n;

    return Number.isInteger(result) ? result : -1;
  };
}
