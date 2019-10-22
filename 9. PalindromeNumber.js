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
