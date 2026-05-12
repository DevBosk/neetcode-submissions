class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        const existedChars = {};
        let maxLength = 0;

        for(let right = 0; right < s.length; right++) {
            let char = s[right];
            if(existedChars[char] !== undefined) {
                left = Math.max(left, existedChars[char] + 1);
            }
            maxLength = Math.max(maxLength, right - left + 1);
            existedChars[char] = right;
        }

        return maxLength;

    }
}
