/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let p1=0,p2=numbers.length-1;
    while(numbers[p1]+numbers[p2]!==target){
        if (numbers[p1]+numbers[p2]<target){
            p1++;
        }else{
            p2--;
        }
    }
    return [p1+1,p2+1];
};
