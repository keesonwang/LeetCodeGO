/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if (nums.length<3) return 0;
    nums.sort((a,b) => a-b);
    var diff=2147483647;
    var left,right,result;
    for (var i=0;i<nums.length-2;i++){
        left = i+1;
        right = nums.length-1;
        while (left<right){
            var sum = nums[left] + nums[right];
            if (diff > Math.abs(sum + nums[i]-target)){
                diff = Math.abs(sum + nums[i] - target);
                result = sum+nums[i];
            }
            if (sum + nums[i] > target){
                right--;
            }else{
                left++;
            }
        }
         while (nums[i+1]===nums[i])i++;
    }
    return result;
}
