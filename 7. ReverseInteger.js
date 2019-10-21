/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const reversenum = Math.abs(x).toString().split('').reverse().join('');
  if (reversenum > 2**31){
      return 0;
  }
  return reversenum * Math.sign(x);
};
