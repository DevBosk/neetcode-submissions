class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let maxCount = 0;
        let result = 0;
        let letters = {};
        for (let right = 0; right < s.length; right++) {
            let currentLetter = s[right];
            letters[currentLetter] = (letters[currentLetter] ?? 0) + 1;
            maxCount = Math.max(maxCount, letters[currentLetter]);
            if((right - left + 1) - maxCount > k) {
                letters[s[left]]--;
                left++;
            }

            result = Math.max(result, right - left + 1);
        }

        return result;
    }
}
