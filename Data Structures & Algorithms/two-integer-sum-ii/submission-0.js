class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;

        while(left < right) {
            let temp = numbers[left] + numbers[right];
            if(target === temp) {
                return [left + 1, right + 1];
            }
            if(temp < target) {
                left++;
            }
            else {
                right--;
            }
        }

        return [];
    }
}
