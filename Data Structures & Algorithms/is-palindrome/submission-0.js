class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

        let indexStart = 0;
        let indexEnd = str.length - 1;
        while(indexStart < indexEnd) {
            if(str[indexStart] !== str[indexEnd]) return false;

            indexStart++;
            indexEnd--;
        }

        return true;
    }
}
