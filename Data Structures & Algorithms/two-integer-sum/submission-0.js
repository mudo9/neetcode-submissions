class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let numbers = {};
        for (let i = 0; i < nums.length; i++) {
            let complement = target - nums[i];
            if (complement in numbers) {
                return [numbers[complement], i];
            }
            numbers[nums[i]] = i;
        }
        return [];
    }
}
