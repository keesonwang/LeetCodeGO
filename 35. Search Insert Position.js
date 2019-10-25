/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length-1;
    if (target<nums[left]) return 0;
    if (target>nums[right]) return right+1;
    while(left<=right){
        let mid = Math.floor((left + right)/2);
        if (nums[mid]===target) return mid;
        else if (nums[mid] < target)  
             left = mid + 1; 
        else
             right = mid - 1; 
     } 
    return left
};


//WTF
var searchInsert = function(nums, target) {
    return nums.includes(target) ? nums.indexOf(target) : nums.filter(elem => elem < target).length;
};
