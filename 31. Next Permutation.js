/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    var i = nums.length-2;
    while (i >= 0&&nums[i+1]<=nums[i]){
        i--;
    }
    if (i<0){
        reverse(nums,0);
        return;
    }
    var j = nums.length-1;
    while(j>=0&&nums[j]<=nums[i]){
        j--;
    }
    // [nums[i], nums[j]] = [nums[j], nums[i]]; === swap(i,j)
    swap(nums,i,j);
    reverse(nums,i+1);
};
let swap = function(nums,i,j){
    let temp = nums[j];
    nums[j] = nums[i];
    nums[i] = temp;
}

let reverse = function(nums,start){
    let i = start, j=nums.length-1;
    while(i<j){
        swap(nums,i,j);
        i++;
        j--;
    }
}
