/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let len = 0;
    const hashmap = { 0: -1 };
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + (nums[i] == 0 ? -1 : 1);
        if (sum in hashmap){
            len = Math.max(len, i - hashmap[sum]);

        }else{
            hashmap[sum] = i;
        }
    }
    return len;
};
