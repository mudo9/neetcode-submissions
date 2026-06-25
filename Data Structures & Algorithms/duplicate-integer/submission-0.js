class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        /*let counter = {};
        for (let num of nums) {
            counter[num] = (counter[num] || 0)  + 1;
            if (counter[num] > 1) return true;
        }
        return false;*/

        let unique = new Set(nums);
        if (unique.size !== nums.length) return true;
        return false;

    }
}
