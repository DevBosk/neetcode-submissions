class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
   search(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        while(left <= right) {
            const i = Math.floor((left + right) / 2);
            if(nums[i] === target) return i;
            else if(target < nums[i]) right = i - 1;
            else if(target > nums[i]) left = i + 1;
        }
        
        return -1;
   }
}
