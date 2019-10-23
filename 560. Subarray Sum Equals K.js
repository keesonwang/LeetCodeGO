/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count=0;
    const hashmap= {0: 1};
    let sum = 0;
    for(let i=0;i<nums.length;i++){
        sum += nums[i];
        if(hashmap[sum - k])
            count += hashmap[sum-k];
        hashmap[sum]=hashmap[sum]?hashmap[sum]+1:1;
    }
    return count;
};
