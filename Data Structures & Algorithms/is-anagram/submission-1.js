class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        let anagram = {};
        for (let char of s) {
            anagram[char] = (anagram[char] || 0) + 1;
        }
        for (let char of t) {
            if (!anagram[char]) return false;
            anagram[char]--;
        }
        return true;
    }
}
