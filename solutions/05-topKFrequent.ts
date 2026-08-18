class Solution5 {
  topKFrequent(nums: number[], k: number): number[] {
    const mostNums: number[] = [];
    const numMap = new Map<number, number>();

    for (const num of nums) {
      const current = numMap.get(num) ?? 0;
      numMap.set(num, current + 1);
    }

    const sortedNumMap = new Map(
      [...numMap.entries()].sort((a, b) => b[1] - a[1])
    );

    let count = 0;

    for (const key of sortedNumMap.keys()) {
      if (count === k) {
        break;
      }

      mostNums.push(key);
      count++;
    }

    return mostNums;
  }
}
