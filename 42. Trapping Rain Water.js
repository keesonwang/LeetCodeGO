/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0, right = height.length - 1,ans = 0, maxleft = 0,maxright = 0;
    while(left<right){
        if(height[left]<height[right]){
            height[left]>=maxleft?  (maxleft = height[left]):ans += (maxleft-height[left]);
            ++left;
        }else{
            height[right]>=maxright? (maxright = height[right]):ans += (maxright-height[right]);
            --right;
        }
    }
    return ans;
};
