class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let storage = new Set();
        for(let num of nums) {
            if(storage.has(num)) return true;
            storage.add(num, num);
        }
        return false;
    }
}
