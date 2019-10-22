//convert to string

/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
    if (x == 0) return true;
    if (x<0 || x%10 == 0) return false;
    const reverse = Math.abs(x).toString().split('').reverse().join('');
    return x == reverse?true : false;
};


//WTF method

var isPalindrome = function(x) {
    return x.toString(10) === x.toString(10).split("").reverse().join(""); 
};


//not convert to string
//!! reverse without new array or string
var isPalindrome = function(x) {
  if (x < 0) return false

  let rev = 0
  for(let i = x; i >= 1; i = Math.floor(i/10)) rev = rev*10 + i%10
  return rev === x
};
