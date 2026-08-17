//With C like for, however this search has O(n²) complexity

// class Solution {
//     hasDuplicate(nums: number[]): boolean {
//         for (let i = 0; i < nums.length; i++){
//             for(let j = i+1; j < nums.length; j++){
//                 console.log(nums[i], nums[j]);
//                 if (nums[j] === nums[i]){
//                     return true;
//                 }
//             }  
//         }
//         return false;
//     }
// }

//A better optimized version, using hashSet - now O(n)

class Solution {
    hasDuplicate(nums: number[]): boolean {
        const seen = new Set<number>();
        for (const num of nums){
            if (seen.has(num)){
                return true;
            }
            seen.add(num);
        }
        return false;
    }
}




