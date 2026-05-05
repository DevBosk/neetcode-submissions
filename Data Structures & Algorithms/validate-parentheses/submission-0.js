class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pairs = { ')': '(', '}': '{', ']': '[' };

        const stack = [];

        for(let sym of s) {
            if(pairs[sym]) {
                if(stack.length > 0 && pairs[sym] === stack[stack.length - 1]) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(sym);
            }
        }

        return !stack.length;
    }
}
