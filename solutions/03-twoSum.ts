class Solution3 {
    twoSum(nums: number[], target: number): number[] {
        const indexes = new Map<number, number>();
        for (let i = 0; i < nums.length; i++){
            const num = nums[i];
            const missing = target - num;

            const previousIndex = indexes.get(missing);

            if(previousIndex !== undefined){
                return [previousIndex, i] 
            }
            indexes.set(num,i)

        }
      return [];  
    } 
}
